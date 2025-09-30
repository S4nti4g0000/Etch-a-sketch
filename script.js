const gridGen = document.getElementById("main-grid")
const buttonSelector = document.getElementById("buttons").querySelectorAll("button")
const info = document.getElementById("info-grid")
let gridSize = 16
let divColor = "rgb(0,0,0)"


gridGen.style.width = "480px"

const generateGrid = () => {

    let cellSize = 480/gridSize

    for(i = 0; i < gridSize; i++){
        for(j = 0; j < gridSize; j++){
            const divG = document.createElement("div")
            divG.style.width = `${cellSize}px`
            divG.style.height = `${cellSize}px`

            divG.classList.add("grid-h")

            divG.addEventListener("mouseenter", () => {
                divG.style.background = divColor
            })

            gridGen.appendChild(divG)
        }
    }

    info.textContent = `Grid size: ${gridSize}x${gridSize}`
}

generateGrid()



buttonSelector.forEach((button) => {
    button.addEventListener("click", (ev) =>{
        let tar = ev.target
        
        switch(tar.id){
            case 'bt-reset':
                clearGrid()
                break;
            case 'bt-change':
                changeSize()
                break;
        }
    })
})


const clearGrid = ()=> {
    const selector = gridGen.querySelectorAll("div")
    selector.forEach((d) => {
        d.style.background = "white"
    })
}

const changeSize = ()=>{
    let newSize = prompt(`Enter a new grid size. Current size is ${gridSize}x${gridSize}.\nMax grid size: 64x64`)

    if (newSize <= 64 && newSize >= 1){
        const selector = gridGen.querySelectorAll("div")
        selector.forEach((d) => {gridGen.removeChild(d)})
        gridSize = +newSize      
        generateGrid()
    }
    else if(newSize > 64 || newSize < 0) alert('Invalid number, Try again. \nPlease enter a new value between 1 and 64')
    else if(typeof(newSize) === 'string') alert('Words can\'t be accepted, Try again. \nPlease enter a new value between 1 and 64')
    else if(newSize === null) alert('No value entered. \nKeeping current settings.')
}

