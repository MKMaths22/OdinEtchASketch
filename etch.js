const container = document.querySelector('.container');
let smallDiv;
let columnDiv;
let num;

//function makeGrid(num) 
//{
    //for (let j = 1; j <= (num*num); j++)
    //{
    //smallDiv = document.createElement('div');
    //smallDiv.classList.add('griddiv');
   // container.appendChild(smallDiv);
    
   // }
//}

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
        squares.forEach((div) => div.addEventListener('mouseover', () => {div.style.backgroundColor = 'red'}));
    } 

num = 16;
makeGrid(num);

const topButton = document.querySelector('.topbutton');
console.log(topButton);
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

    
