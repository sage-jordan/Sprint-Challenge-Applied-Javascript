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
function createCarousel(){
  // <div class="carousel">
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  //   <div class="left-button"> < </div>
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  carousel.appendChild(leftButton);
  //   <img src="./assets/carousel/mountains.jpeg" />
  const mountainsImg = document.createElement('img');
  mountainsImg.src = './assets/carousel/mountains.jpeg';
  carousel.appendChild(mountainsImg);
  //   <img src="./assets/carousel/computer.jpeg" />
  const computerImg = document.createElement('img');
  computerImg.src = './assets/carousel/computer.jpeg';
  carousel.appendChild(computerImg);
  //   <img src="./assets/carousel/trees.jpeg" />
  const treesImg = document.createElement('img');
  treesImg.src = './assets/carousel/trees.jpeg';
  carousel.appendChild(treesImg);
  //   <img src="./assets/carousel/turntable.jpeg" />
  const turntableImg = document.createElement('img');
  turntableImg.src = './assets/carousel/turntable.jpeg';
  carousel.appendChild(turntableImg); 
  //   <div class="right-button"> > </div>
  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  carousel.appendChild(rightButton);

  var items = carousel.querySelectorAll('img');
  console.log(items);
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  function navigate(direction) {
    current.style.display = 'none';
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.style.display = 'block';
  }
  rightButton.addEventListener('click', function(ev) {
    navigate(1);
  });
  leftButton.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
  return carousel;
}
const carouselContainer = document.querySelector('.carousel-container');
const callCarousel = createCarousel();
carouselContainer.appendChild(callCarousel);