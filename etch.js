const container = document.querySelector('.container');
let smallDiv;
let columnDiv;
let num;

function nextNumberDown(x) {
    if (x === 0) return 0;
    x -= 25;
    return Math.floor((Math.floor(2*x/51))*(51/2));
    }

function makeMoreBlack(div)
    {
    let rgb = getComputedStyle(div,null).getPropertyValue("background-color");
    console.log(rgb);
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    var red=parseInt(rgb[1]);
    var green=parseInt(rgb[2]);
    var blue=parseInt(rgb[3]);
    red = nextNumberDown(red);
    green = nextNumberDown(green);
    blue = nextNumberDown(blue);
    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
       
num = 16;
makeGrid(num);

function makeGrid(num)
   {
    for (let i = 1; i <= num; i++)
       //for each value of i we make a column container that will contain num square divs
       {
        columnDiv = document.createElement('div');
        columnDiv.classList.add('columndiv');
        // the column takes up the entire height of the container div and a nominal width
        container.appendChild(columnDiv);
            for (let j = 1; j <= num; j++)
            {
            smallDiv = document.createElement('div');
            smallDiv.classList.add('griddiv');
            columnDiv.appendChild(smallDiv);
            }
        }
        let squares = document.querySelectorAll('.griddiv');
        //squares.forEach((div) => div.addEventListener('mouseover', () => {div.style.backgroundColor = randomColor()}));
        squares.forEach((div) => div.addEventListener('mouseover', () => makeMoreBlack(div)));
    } 

    function randomColor() {
        return `rgb(${Math.floor((Math.random())*128)}, ${Math.floor((Math.random())*128)},${Math.floor((Math.random())*128)})`;
    }
    
    
    let redValue = 255;
    let blueValue = 0;
    let greenValue = 0;


const topButton = document.querySelector('.topbutton');
topButton.addEventListener('click', ohBoy);

function ohBoy() 
{
    num = Number(prompt('Choose a side length for the new grid'));
    let i = 0;
    while (((num < 1) || (num > 100) || ((Math.floor(num) - num) !== 0)) && (i++ <= 4))
       {num = Number(prompt('Please choose a whole number between 2 and 100 inclusive.'))};
    
    let smallDivs = document.querySelectorAll('.griddiv');
    smallDivs.forEach((div) => div.remove());
    let columnDivs = document.querySelectorAll('.columndiv');
    columnDivs.forEach((div) => div.remove());
        
    makeGrid(num);
}

    
