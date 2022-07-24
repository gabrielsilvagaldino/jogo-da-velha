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
let array = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const funcionalidadeDosBlocos = () => {
  for (let i = 0; i < gridFilho.length; i += 1) {
      gridFilho[i].addEventListener('click', () => {
        if (alternador === -1 && gridFilho[i].innerHTML === '') {
          gridFilho[i].className = 'grid-block ' + selecionado
          gridFilho[i].innerHTML= 'X'
          array[i] = 1
          console.log(array);
          selecionado = 'blue'
          alternador += 1
        } else if (alternador === 0 && gridFilho[i].innerHTML === '') {
            gridFilho[i].className = 'grid-block ' + selecionado
            gridFilho[i].innerHTML= 'O'
            array[i] = -1
            console.log(array);
            selecionado = 'red'
            alternador -= 1
        }
        console.log(alternador);
      })
  }
}
funcionalidadeDosBlocos();



const resultadoFinal = () => {
  for (let i = 0; i < gridFilho.length; i += 1) {
    gridFilho[i].addEventListener('click', () => {
      for (let index = 0; index < gridFilho.length; index += 3) {
        if (array[index] + (array[index+1]) + (array[index+2]) === 3) alert ('VERMELHO GANHOU!!!');
      }
      for (let count = 0; count < gridFilho.length; count += 1) {
        if (array[count] + (array[count+3]) + (array[count+6]) === 3) alert ('VERMELHO GANHOU!!!');
      }

      if (array[0] + array[4] + array[8] === 3) setTimeout(alert ('VERMELHO GANHOU!!!'), 1000)
      if (array[2] + array[4] + array[6] === 3) setTimeout(alert ('VERMELHO GANHOU!!!'), 1000)
    });
  }
}

resultadoFinal();