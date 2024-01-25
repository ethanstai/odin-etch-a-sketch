const container = document.querySelector('#container');
let body = document.querySelector('body');
let grid_size = 16;
let button = document.createElement('button');
body.insertBefore(button, container);
button.textContent = "Click to customize grid size";

button.addEventListener('click', () => {
    grid_size = prompt("Please enter a number from 1-100 to for the dimensions of the grid");
    if (grid_size > 100) {
        alert("Input a number between 1 and 100!");
        return;
    }
    else {
        clearGrid();
        createGrid();
    }
});

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function createGrid() {
    for (let i = 0; i < (grid_size*grid_size); i++) {
        let square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
        square.style.width = [(506/grid_size) - 2] + "px";
        square.style.height = [(506/grid_size) - 2] + "px";
        
        square.addEventListener('mouseover' , () => {
            square.style.backgroundColor = "black";
        });
    }
}

createGrid(); //Create 16x16 grid by default
