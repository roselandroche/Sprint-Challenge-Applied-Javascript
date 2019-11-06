// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container')

function newArticle(obj) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    cardsContainer.appendChild(cardDiv)

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = obj.headline
    cardDiv.appendChild(headline)

    const author = document.createElement('div')
    author.classList.add('author')
    cardDiv.appendChild(author)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    author.appendChild(imgContainer)

    const image = document.createElement('img')
    image.src = obj.authorPhoto
    imgContainer.appendChild(image)

    const postScript = document.createElement('span')
    postScript.textContent = `By ${obj.authorName}`
    author.appendChild(postScript)

    return cardDiv
}



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let dataObj = response.data.articles
        // console.log(dataObj)

        dataObj.javascript.forEach(item => {
            cardsContainer.appendChild(newArticle(item))
        })
        dataObj.bootstrap.forEach(item => {
            cardsContainer.appendChild(newArticle(item))
        })
        dataObj.technology.forEach(item => {
            cardsContainer.appendChild(newArticle(item))
        })
        dataObj.jquery.forEach(item => {
            cardsContainer.appendChild(newArticle(item))
        })
        dataObj.node.forEach(item => {
            cardsContainer.appendChild(newArticle(item))
        })
    })
    .catch(error => {
        console.log(error)
    })

