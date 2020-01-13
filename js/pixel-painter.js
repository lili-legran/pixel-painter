const desktop = document.querySelector('.painter__desktop');
const eraserButton = document.querySelector('.painter__tools_eraser');
const eraseAll = document.querySelector('.painter__tools_erase-all');
const colorInput = document.querySelector('.jscolor');
const sizeInput = document.querySelector('.painter__tools_pixel');
let color;
let size;
let draw = false;
let eraser = false;

const setDesktop = () => {
  clearDesktop();

  let desktopWidth = desktop.clientWidth;
  let desktopHeight = desktop.clientHeight;

  let rows = Math.floor(desktopHeight / size);
  let columns = Math.floor(desktopWidth / size);

  for (let i = 0; i < rows; i++) {
    let desktopRow = document.createElement('div');
    desktopRow.classList.add('painter__desktop_row');
    desktop.appendChild(desktopRow);
    for (let j = 0; j < columns; j++) {
      let point = document.createElement('div');
      desktopRow.appendChild(point);
      point.style.width = size + 'px';
      point.style.height = size + 'px';
      point.addEventListener('mouseenter', function() {
        if(draw === true) {
          if (eraser === true) {
            point.style.background = '#fff';
          } else {
            point.style.background = '#' + color;
          }
        }
      });
    }
  }
}

desktop.addEventListener('mousedown', function () {
  draw = true;
});
desktop.addEventListener('mouseup', function () {
  draw = false;
});

const clearDesktop = () => {
  desktop.innerHTML = '';
}

const getColor = () => {
  color = colorInput.value;
}

const getSize = () => {
  size = sizeInput.value;
}

const changeColor = () => {
  eraser = false;
  getColor();
}

const changeSize = () => {
  getSize();
  changeColor();
  setDesktop();
}

colorInput.addEventListener('change', changeColor);
sizeInput.addEventListener('change', changeSize);

eraserButton.addEventListener('click', function() {
  eraser = true;
});

eraseAll.addEventListener('click', setDesktop);
changeSize();