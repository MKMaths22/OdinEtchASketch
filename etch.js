const container = document.querySelector('.container');
let smallDiv; 
let num;

function whenHover(div) {
    div.style.backgroundColor = 'red';
}

for (let i = 1; i <= 256; i++)
  {
  smallDiv = document.createElement('div');
  smallDiv.classList.add('griddiv');
  container.appendChild(smallDiv);
  }
const squares = document.querySelectorAll('.griddiv');
  squares.forEach((div) => div.addEventListener('mouseover', () => {div.style.backgroundColor = 'red'}));

const topButton = document.querySelector('.topbutton');
console.log(topButton);
topButton.addEventListener('click', ohBoy);

function ohBoy() {
    num = Number(prompt('Choose a side length for the new grid'));
    let i = 0;
    while (((num < 1) || (num > 100) || ((Math.floor(num) - num) !== 0)) && (i++ <= 4))
       {num = Number(prompt('Please choose a whole number between 2 and 100 inclusive.'))};
    let allDivs = document.querySelectorAll('.griddiv');
    allDivs.forEach((div) => div.remove());
}

