/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carContainer = document.querySelector('.carousel-container')

function newCarousel() {
  const carDiv = document.createElement('div')
  carDiv.classList.add('carousel')
  carContainer.appendChild(carDiv)

  const leftBtn = document.createElement('div')
  leftBtn.classList.add('left-button')
  leftBtn.textContent = ' < '
  carDiv.appendChild(leftBtn)

  const img1 = document.createElement('img')
  img1.src = './assets/carousel/mountains.jpeg'
  carDiv.appendChild(img1)

  const img2 = document.createElement('img')
  img2.src = './assets/carousel/computer.jpeg'
  carDiv.appendChild(img2)

  const img3 = document.createElement('img')
  img3.src = './assets/carousel/trees.jpeg'
  carDiv.appendChild(img3)

  const img4 = document.createElement('img')
  img4.src = './assets/carousel/turntable.jpeg'
  carDiv.appendChild(img4)

  const rightBtn = document.createElement('div')
  rightBtn.classList.add('right-button')
  rightBtn.textContent = ' > '
  carDiv.appendChild(rightBtn)

  return carDiv
}

newCarousel()


const image1 = document.querySelectorAll('img')[0]
const image2 = document.querySelectorAll('img')[1]
const image3 = document.querySelectorAll('img')[2]
const image4 = document.querySelectorAll('img')[3]

let currentIndex = 1;

const leftButton = document.querySelector('.left-button')
leftButton.addEventListener('click', (event) => {
  if (currentIndex === 1) {
    currentIndex = 4;
  } else {
    currentIndex -= 1;
  }
})

const rightButton = document.querySelector('.right-button')
rightButton.addEventListener('click', (event) => {
  if (currentIndex === 4) {
    currentIndex = 1;
  } else {
    currentIndex += 1;
  }
})