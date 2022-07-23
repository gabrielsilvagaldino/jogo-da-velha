const grid = document.querySelector('#grid');

let selecionado = 'red'

const criaGrid = () => {
    for (let i = 0; i < 9; i += 1) {
        let criaBloco = document.createElement('div')
        criaBloco.className = 'grid-block'
        grid.appendChild(criaBloco)
    }
}
criaGrid();

const gridFilho = document.querySelectorAll('.grid-block')
let alternador = -1
for (let i = 0; i < gridFilho.length; i += 1) {
    gridFilho[i].addEventListener('click', () => {
      if (alternador === -1 && gridFilho[i].innerHTML === '') {
        gridFilho[i].className = 'grid-block ' + selecionado
        gridFilho[i].innerHTML= 'X'
        selecionado = 'blue'
        alternador += 1
      } else if (alternador === 0 && gridFilho[i].innerHTML === '') {
          gridFilho[i].className = 'grid-block ' + selecionado
          gridFilho[i].innerHTML= 'O'
          selecionado = 'red'
          alternador -= 1
      }
      console.log(alternador);
    })
}