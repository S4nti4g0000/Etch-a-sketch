const gridGen = document.getElementById("main-grid")
let gridSize = 16
let cellSize = 480/gridSize

gridGen.style.width = "480px"

for(i = 0; i < gridSize; i++){
    for(j = 0; j < gridSize; j++){
        const divG = document.createElement("div")
        divG.style.width = `${cellSize}px`
        divG.style.height = `${cellSize}px`

        divG.classList.add("grid-h")
        divG.addEventListener("mouseenter", () => {
            divG.style.background = 'black'
        })

        gridGen.appendChild(divG)
    }
}

