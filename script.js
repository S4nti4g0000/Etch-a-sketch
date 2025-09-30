const gridGen = document.getElementById("main-grid")
const buttonSelector = document.getElementById("buttons").querySelectorAll("button")
let gridSize = 16


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
                divG.style.background = 'black'
            })

            gridGen.appendChild(divG)
        }
    }
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
    let newSize = prompt(`Enter a new grid size. Current size is ${gridSize}x${gridSize} 
Max grid size: 64x64`)

    if (newSize <= 64 && newSize >= 1){
        const selector = gridGen.querySelectorAll("div")
        selector.forEach((d) => {gridGen.removeChild(d)})
        gridSize = +newSize      
        generateGrid()
    }else if(newSize > 64 || newSize < 0){
        newSize = prompt('Invalid number. Please enter a new value between 1 and 64')
    }    
}

