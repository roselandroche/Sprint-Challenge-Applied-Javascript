// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container')

function Header() {
    const headerDiv = document.createElement('div')
    headerDiv.classList.add('header')
    headerContainer.appendChild(headerDiv)

    const date = document.createElement('span')
    date.classList.add('date')
    date.textContent = 'SMARCH 28, 2019'
    headerDiv.appendChild(date)

    const headerTitle = document.createElement('h1')
    headerTitle.textContent = 'Lambda Times'
    headerDiv.appendChild(headerTitle)

    const temp = document.createElement('span')
    temp.classList.add('temp')
    temp.textContent = '98°'
    headerDiv.appendChild(temp)

    return headerDiv
}

Header();