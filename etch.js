const container = document.querySelector('.container');
let smallDiv; 

for (let i = 1; i <= 256; i++)
  {
  smallDiv = document.createElement('div');
  smallDiv.classList.add('griddiv');
  container.appendChild(smallDiv);
  }