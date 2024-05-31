const cont = document.querySelector(".container");
let NO_OF_BLOCKS = 16;

const rsBtn = document.createElement("button");
cont.appendChild(rsBtn);
rsBtn.textContent = "Resize";
rsBtn.style.display = "flex";
rsBtn.style.margin = "auto";


const grid = document.createElement("div");
cont.appendChild(grid);
grid.style.display = "flex";
grid.style.flexDirection = "column";
grid.style.flex = "1, 1, auto";
grid.style.width = "720px";
grid.style.maxWidth = "720px";
grid.style.height = "720px";
grid.style.maxHeight = "720px";
grid.style.margin = "auto";


for(let i = 0; i < NO_OF_BLOCKS; i++){
    const currRow = document.createElement("div");
    currRow.style.display = "flex";
    currRow.style.border = "thin solid black";
    currRow.style.flex = "1 1 auto";
    grid.appendChild(currRow)
    for(let j = 0; j < NO_OF_BLOCKS; j++){
        const currSquare = document.createElement("div");
        currSquare.display = "flex";
        if(j != NO_OF_BLOCKS - 1) currSquare.style.borderRight = "thin solid black";
        if(j != 0) currSquare.style.borderLeft = "thin solid black";
        currSquare.style.flex = "1 1 auto";
        currRow.appendChild(currSquare);
        currSquare.addEventListener("mouseover", () =>{
            currSquare.style.backgroundColor = "black";
        });
    }
}


function updateGrid(noSquares){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    cont.removeChild(grid);

    NO_OF_BLOCKS = noSquares;

    for(let i = 0; i < NO_OF_BLOCKS; i++){
        const currRow = document.createElement("div");
        currRow.style.display = "flex";
        currRow.style.border = "thin solid black";
        currRow.style.flex = "1 1 auto";
        grid.appendChild(currRow)
        for(let j = 0; j < NO_OF_BLOCKS; j++){
            const currSquare = document.createElement("div");
            currSquare.display = "flex";
            if(j != NO_OF_BLOCKS - 1) currSquare.style.borderRight = "thin solid black";
            if(j != 0) currSquare.style.borderLeft = "thin solid black";
            currSquare.style.flex = "1 1 auto";
            currRow.appendChild(currSquare);

            currSquare.addEventListener("mouseover", () =>{
                currSquare.style.backgroundColor = "black";
            });
        }
    }
    cont.appendChild(grid);
}

rsBtn.addEventListener("click", ()=> {
    let noSquares = prompt("Enter the number of squares on each sides: ");
    while(isNaN(noSquares) || noSquares > 100){
        if(isNaN(noSquares)) noSquares = prompt("You have not enterd a number!\nEnter the number of squares on each sides: ");
        if(noSquares > 100) noSquares = prompt("Maximum limit ios 100!\nEnter the number of squares on each sides: ");
    }
    
    updateGrid(noSquares);
});
