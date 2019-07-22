// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('Success! ', data);
        const innerData = data.data;
        const articles = innerData.articles;
        console.log(articles);
        const bootstrap = articles.bootstrap;
        const javascript = articles.javascript;
        const jquery = articles.jquery;
        console.log(jquery);
        const node = articles.node;
        const technology = articles.technology;
        const cards = document.querySelector('.cards-container');
        bootstrap.forEach(array => {
            cards.appendChild(createCard(array));
        })
        javascript.forEach(array => {
            cards.appendChild(createCard(array));
        })
        jquery.forEach(array => {
            cards.appendChild(createCard(array));
        })
        node.forEach(array => {
            cards.appendChild(createCard(array));
        })
        technology.forEach(array => {
            cards.appendChild(createCard(array));
        })
    })
    .catch(err => {
        console.log('Error: ', err);
    })

function createCard(data){
    // <div class="card">
    const card = document.createElement('div');
    card.classList.add('card');
    //   <div class="headline">{Headline of article}</div>
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;
    card.appendChild(headline)
    // console.log(headline);
    //    <div class="author">
    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);
    //     <div class="img-container">
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);
    //       <img src={url of authors image} />
    const img = document.createElement('img');
    img.src = data.authorPhoto;
    imgContainer.appendChild(img);
    //     <span>By {authors name}</span></div>
    const authorName = document.createElement('span');
    authorName.textContent = `By ${data.authorName}`;
    author.appendChild(authorName);

    return card;
}
