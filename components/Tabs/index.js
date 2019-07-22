// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        console.log(`Success! `, data);
        const topicsElement = document.querySelector('.topics');
        const topics = data.data;
        console.log(topics);
        topics.topics.forEach(item => {
            const topic = document.createElement('div');
            topic.classList.add('tab');
            topic.textContent = item;
            topicsElement.appendChild(topic);
        })
    })
    .catch(err => {
        console.log(`There was an error: `, err);
    })