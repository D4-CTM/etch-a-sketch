const sketchMatrixDiv = document.querySelector("#sketchMatrix");
const colorPalette = document.getElementById("colorPalette");
const dimensionsDiv = document.querySelector("#dimensions");
const resetBTN = document.querySelector("#resetBTN");
const randomBTN = document.querySelector("#randomBTN");
const colorsDiv = document.querySelector("#colors");
let randomOn = false;
let dimensions;

randomBTN.addEventListener("click", () => {
    randomOn = !randomOn;

    alert("Rainbow mode has been: " + (randomOn ? "activated" : "deactivated"));
})

resetBTN.addEventListener("click", () => {
    setDimension(dimensions); 
});

//We create the buttons to set the size of the sketch-box
function setSizeButtons(dimensions) {
    if (dimensions > 100) return ;

    const button = document.createElement("button");     
    button.textContent = `${dimensions} x ${dimensions}`;
    button.addEventListener("click", () => {
        setDimension(dimensions);
    });

    dimensionsDiv.appendChild(button);
    setSizeButtons(dimensions + 16);
}
setSizeButtons(16);

//setter for the sketches dimension
function setDimension(_dimensions) {
    dimensions = _dimensions;
    clearSketchMatrixDiv();
    const size = sketchMatrixDiv.clientHeight/dimensions;
    const sketchMatrix = [];
    for (row = 0; row < dimensions; row++) {
        sketchMatrix[row] = document.createElement("div");
        for (col = 0; col < dimensions; col++) {
            const tile = document.createElement("div");
            tile.setAttribute("class", "tile");
            tile.style.backgroundColor = "white"
            tile.style.height = size + "px";
            tile.style.width = size + "px";

            tile.addEventListener("mouseenter", () => {
                if (randomOn) {
                    tile.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
                } else colorSelected(tile);
            });

            sketchMatrix[row].appendChild(tile)
        }
        sketchMatrixDiv.appendChild(sketchMatrix[row]);
    }
}
setDimension(8);

function getRandomColor() {
    return 1 + Math.floor(Math.random() * 100)%255;
}

function colorSelected(tile) {
    colorChosen = colorPalette.value;

    if (tile.style.background == colorChosen) {
        tile.style.background = "white";
    } else {
        tile.style.background = colorChosen;
    }
}

function clearSketchMatrixDiv() {
    while (sketchMatrixDiv.firstChild) {
        sketchMatrixDiv.removeChild(sketchMatrixDiv.firstChild);
    }
}