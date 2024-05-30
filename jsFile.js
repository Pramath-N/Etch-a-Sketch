const cont = document.querySelector(".container");
const NO_OF_BLOCKS = 12;

for(let i = 0; i < NO_OF_BLOCKS; i++){
    const currRow = document.createElement("div");
    currRow.style.display = "flex";
    currRow.style.border = "thin solid black";
    currRow.style.flex = "1 1 auto";
    cont.appendChild(currRow)
    for(let j = 0; j < NO_OF_BLOCKS; j++){
        const currSquare = document.createElement("div");
        currSquare.display = "flex";
        if(j != NO_OF_BLOCKS - 1) currSquare.style.borderRight = "thin solid black";
        if(j != 0) currSquare.style.borderLeft = "thin solid black";
        currSquare.style.flex = "1 1 auto";
        currRow.appendChild(currSquare);
    }
}
