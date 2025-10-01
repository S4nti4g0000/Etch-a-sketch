const gridGen = document.getElementById("main-grid")
const buttonSelector = document.getElementById("buttons").querySelectorAll("button")
const info = document.getElementById("info-grid")
let vary = 0
let check = false
let gridSize = 16
let divColor = "rgba(0, 0, 0, 0.19)"


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

                divColor = `rgb(0,0,0,${vary+=0.09})`
                if(vary >= 1) vary = 1

                if(check === true){
                    divG.style.background = 
                    `rgb(${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)},
                    ${Math.floor(Math.random() * 255)})`
                }
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
            case 'randomize-color':
                check = !check
                console.log(check)
                divColor = "rgb(0,0,0,0)"
                vary = 0
                break;
        }
    })
})


const clearGrid = ()=> {
    const selector = gridGen.querySelectorAll("div")
    divColor = `rgb(0,0,0,0)`
    vary = 0
    selector.forEach((d) => {
        d.style.background = "white"
    })
}

const changeSize = ()=>{
    let newSize = prompt(`Enter a new grid size. Current size is ${gridSize}x${gridSize}.\nMax grid size: 64x64`)
    divColor = `rgb(0,0,0,0)`
    vary = 0
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