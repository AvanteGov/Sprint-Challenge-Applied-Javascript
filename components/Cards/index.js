// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
// https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following 
// DOM component:
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





const cardConstructor = (object) => {

    // creates parent container and adds class
    let parentContainer = document.createElement('div');
    parentContainer.classList.add('card');

    // creates header, adds class, and appends to parent container 
    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = object.headline;
    parentContainer.appendChild(headline);

    // creates author line, adds class and content, appends to parent container
    let authorName = document.createElement('div');
    authorName.classList.add('author');
    authorName.textContent = object.author;
    parentContainer.appendChild(authorName);

    // create image container  and adds class 
    let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    parentContainer.appendChild(imageContainer);

    // creates image tag, adds source, and appends to image container 
    let authorImage = document.createElement('img');
    authorImage.src = object.authorPhoto;
    imageContainer.appendChild(authorImage);

    // creates span with author name 
    let byLine = document.createElement('div');
    byLine.textContent = `By: ${object.authorName}`
    parentContainer.appendChild(byLine);
    
    return parentContainer
}

const cardsParent = document.querySelector('.cards-container');

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then((response) => {
//         console.log(response)
//         // for each response object, go over each article array
//         response.data.articles.forEach((article) =>{
//             // for each article array, go over the object 
//             article.bootstrap.forEach((articleObject) => {
//                 cardsParent.appendChild(cardConstructor(articleObject))
//             })
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//         console.log('you have a big error, tex')
//     })


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response)
        // for each response object, go over each article array
        response.data.articles.bootstrap.forEach((article) =>{
           cardsParent.appendChild(cardConstructor(article))
        })
        response.data.articles.javascript.forEach((article) =>{
           cardsParent.appendChild(cardConstructor(article))
        })
        response.data.articles.jquery.forEach((article) =>{
           cardsParent.appendChild(cardConstructor(article))
        })
        response.data.articles.node.forEach((article) =>{
           cardsParent.appendChild(cardConstructor(article))
        })
        response.data.articles.technology.forEach((article) =>{
           cardsParent.appendChild(cardConstructor(article))
        })
    })
    .catch((err) => {
        console.log(err)
        console.log('you have a big error, tex')
    })

    // response is an object > object.data has an object with articles
    // aricles is an object with arrays of objects 
    // must iterate over arrays to pass object to constructor 

    // for each object, iterate over array to pass object to constructor 