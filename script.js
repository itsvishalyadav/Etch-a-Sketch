let container = document.querySelector('#container')
const bodyElm = document.querySelector('body')
let darkLbl = document.querySelector('#darkLabel')
darkLbl.textContent = '☀️'

bodyElm.style.backgroundImage = "url('assets/stacked-waves-haikei.svg')"
bodyElm.style.backgroundRepeat = 'repeat-y'
bodyElm.style.backgroundSize = 'cover'

let sqrSide = 40
let sqrCount = 16

function bulidNew() {
  container.innerHTML = ''
  buildSketch(sqrCount)
}

function getDarkLightMode() {
  console.log('Checkbox is checked:', darkCheck.checked)

  if (darkCheck.checked) {
    bodyElm.style.backgroundImage = "url('assets/stacked-waves-haikei(3).svg')"
    darkLbl.textContent = '🌙'
  } else {
    bodyElm.style.backgroundImage = "url('assets/stacked-waves-haikei.svg')"
    darkLbl.textContent = '☀️'
  }
  bodyElm.style.backgroundRepeat = 'repeat-y'
  bodyElm.style.backgroundSize = 'cover'
}

function enterRows() {
  do {
    sqrCount = prompt('Enter a grid size (1-100):')
    sqrCount = Number(sqrCount) // Convert to number
  } while (isNaN(sqrCount) || sqrCount < 1 || sqrCount > 100)
  sqrSide = 640 / sqrCount
  bulidNew()
}

let crtbtn = document.querySelector('#createbtn')
crtbtn.addEventListener('click', enterRows)

let clrbtn = document.querySelector('#clearbtn')
clrbtn.addEventListener('click', bulidNew)

let darkCheck = document.querySelector('#dark')
darkCheck.checked = false
darkCheck.addEventListener('change', getDarkLightMode)

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
    square.style.backgroundColor = 'white'
    square.style

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = selcolor // or any color
    })

    container.appendChild(square)
  }
}
