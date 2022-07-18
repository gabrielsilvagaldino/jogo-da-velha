const grid = document.querySelector('#grid');

function criaGrid() {
    for (let i = 0; i < 9; i += 1) {
        let criaBloco = document.createElement('div')
        criaBloco.className = 'grid-block'
        grid.appendChild(criaBloco)
    }
}

function colocaCruz() {
    
}

criaGrid();