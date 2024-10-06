const PIXEL_HEIGHT = "10px";
const PIXEL_WIDTH = "10px";

const dimensionsDiv = document.querySelector("#dimensions");
let sketchMatrix = [];

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
function setDimension(dimensions) {
    sketchMatrix = [];
    for (row = 0; row < dimensions; row++) {
        sketchMatrix[row] = [];
        for (col = 0; col < dimensions; col++) {
            sketchMatrix[row][col] = document.createElement("div");


        }
    
    }
}
setDimension(16);