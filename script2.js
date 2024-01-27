const container = document.querySelector('#container');
const toolbar = document.querySelector('#toolbar');
let body = document.querySelector('body');
let grid_size = 16;
let color = "black";
let square;

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

//customize grid size button
let size_btn = document.createElement('button');
toolbar.appendChild(size_btn);
size_btn.textContent = "Click to customize grid size";
size_btn.addEventListener('click', () => {
    grid_size = prompt("Please enter a number from 1-100 to for the dimensions of the grid");
    if (grid_size > 100) {
        alert("Input a number between 1 and 100!");
        return;
    }
    else {
        clearGrid();
        createGrid(black);
    }
});

//reset button to reset grid to 16x16 
let reset = document.createElement('button');
reset.textContent = "Reset";
toolbar.appendChild(reset);
reset.addEventListener('click', () => {
    grid_size = 16;
    clearGrid();
    createGrid(black);
});

function rainbow(square) {
    square.addEventListener('mouseover' , () => {
        color = '#' + Math.floor(Math.random()*16777215).toString(16);
        //^ pass 16 into toString to indicate conversion be done in base-16 aka the hexadecimal system 
        square.style.backgroundColor = color;
    });
}

//button to put etch a sketch into rainbow mode
let rainbowBtn = document.createElement('button');
rainbowBtn.textContent = "Rainbow Mode"
toolbar.appendChild(rainbowBtn);
rainbowBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(rainbow);
});

function black(square) {
    square.addEventListener('mouseover' , () => {
        square.style.backgroundColor = "black";
    });
}

let blackBtn = document.createElement('button');
blackBtn.textContent = "Default Mode"
toolbar.appendChild(blackBtn);
blackBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(black);
});

function createGrid(func) {
    for (let i = 0; i < (grid_size*grid_size); i++) {
        square = document.createElement('div');
        square.setAttribute('class', 'square');
        container.appendChild(square);
        square.style.width = [(506/grid_size) - 2] + "px";
        square.style.height = [(506/grid_size) - 2] + "px";
        
        func(square);
    }
}

createGrid(black); //Create 16x16 grid in black mode by default
