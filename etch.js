const container = document.querySelector('.container');
//creating variable for outer container of Etch-A-Sketch

let smallDiv;
let columnDiv;

let num = 16;
makeGrid(num,'random');
//when page loads the grid is 16x16 and uses the random color function 

const buttonShading = document.querySelector('.buttonshading');
const buttonRandom = document.querySelector('.buttonrandom');
//creating variables for each button 

buttonShading.addEventListener('click', () => ohBoy('shading'));
buttonRandom.addEventListener('click', () => ohBoy('random'));
//the argument on the OhBoy function keeps track of which button was clicked

function ohBoy(choice) 
{
    num = Number(prompt('How many pixels on each side of the new grid?'));
    let i = 1;
    while (((num < 2) || (num > 100) || ((Math.floor(num) - num) !== 0)) && (i++ <= 4))
    //I must always remember the prompt box input is a STRING so checking typeof is number will always fail! 
    //while input is not a whole number between 2 and 100 inclusive, we ask for another, but only 4 times
    {num = Number(prompt('Please choose a whole number between 2 and 100 inclusive.'))};
    
    let smallDivs = document.querySelectorAll('.griddiv');
    smallDivs.forEach((div) => div.remove());
    let columnDivs = document.querySelectorAll('.columndiv');
    columnDivs.forEach((div) => div.remove());
        
    makeGrid(num,choice);
    //it is only in makeGrid that the 'choice' argument makes a difference 
}

    

function makeGrid(num,choice)
{
    for (let i = 1; i <= num; i++)
       //for each value of i we make a column container that will contain num square divs
       {
        columnDiv = document.createElement('div');
        columnDiv.classList.add('columndiv');
        // the column takes up the entire height of the container div and a nominal width
        // flexbox in styles.css then expands the columns to collectively fill the full width of the container, 
        // keeping their widths equal
        container.appendChild(columnDiv);
            for (let j = 1; j <= num; j++)
            {
            smallDiv = document.createElement('div');
            smallDiv.classList.add('griddiv');
            columnDiv.appendChild(smallDiv);
            //simlarly the vertical flex direction within each column stacks the small divs to fill the full height.
            //width 100 per cent for small divs means as the columns expand width-ways, so do the small divs! 
            }
        }
        let squares = document.querySelectorAll('.griddiv');
        //now the correct addEventListener is applied depending on the choice of button 
        if (choice === 'shading') {squares.forEach((div) => div.addEventListener('mouseover', () => makeMoreBlack(div)));}
        else {squares.forEach((div) => div.addEventListener('mouseover', () => randomColor(div)));}
} 

function makeMoreBlack(div)
{
    let rgb = getComputedStyle(div,null).getPropertyValue("background-color");
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var red=parseInt(rgb[1]);
    var green=parseInt(rgb[2]);
    var blue=parseInt(rgb[3]);
    //The string for background-color has the colour values extracted. See README for Stack Exchange credit for lines 68-71 above.
    red = nextNumberDown(red);
    green = nextNumberDown(green);
    blue = nextNumberDown(blue);
    //each colour value is reduced. They should always be equal to each other.
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

function nextNumberDown(x) 
{
    if (x === 0) return 0;
    x -= 25;
    //reducing colour from 255 to 0 means going in steps of 25.5 on average. Reducing by 25 is an overestimate so the next line...
    
    return Math.floor((Math.floor(2*x/51))*(51/2));
    //divides by 25.5 to round down to the integer that is the INTENDED one to multiply by 25.5, multiplies by 25.5 and rounds down.
}

function randomColor(div) 
{
    div.style.backgroundColor = `rgb(${Math.floor((Math.random())*256)}, ${Math.floor((Math.random())*256)},${Math.floor((Math.random())*256)})`;
}
    //backticks allow us to put variables into a style command to make a div have a totally pseudo-random colour. 


