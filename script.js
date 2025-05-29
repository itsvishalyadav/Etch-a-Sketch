let container = document.querySelector('#container')

let sqrSide = 40
let sqrCount = 16

function bulidNew(){
  container.innerHTML = ''
  buildSketch(sqrCount)
}

function enterRows() {
  do {
    sqrCount = prompt('Enter a grid size (1-100):')
    sqrCount = Number(sqrCount) // Convert to number
  } while (isNaN(sqrCount) || sqrCount < 1 || sqrCount > 100)
  sqrSide = 640 / sqrCount
  bulidNew();
}

let crtbtn = document.querySelector('#createbtn')
crtbtn.addEventListener('click', enterRows)

let clrbtn = document.querySelector('#clearbtn')
clrbtn.addEventListener('click', bulidNew)

const dropdown = document.querySelector('select')
let selcolor = 'black'
dropdown.addEventListener('click', () => {
  selcolor = dropdown.value
})

function buildSketch(sqrCount) {
  for (let i = 0; i < sqrCount * sqrCount; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-square')
    square.style.width = `${sqrSide}px`
    square.style.height = `${sqrSide}px`

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = selcolor // or any color
    })

    container.appendChild(square)
  }
}
