console.log('## clone products card');

function cloneSlideItem() {
  console.log('cloneSlideItem()');

  // slideContainer parent element to append to.
  const slideContainer = document.getElementById('slideContainer');
  // slideItem[0] element to clone
  const slideItem = document.getElementById('slideItem');
  
  // Clone slideItem[1] and its child nodes
  const slideItem1 = slideItem.cloneNode(true);
  // Cloned element 
  console.log(slideItem1);
  // Append cloned slideItem to slideContainer
  slideContainer.appendChild(slideItem1)
  
  // Clone slideItem[2] and its child nodes
  const slideItem2 = slideItem.cloneNode(true);
  // Cloned element 
  console.log(slideItem2);
  // Append cloned slideItem to slideContainer
  slideContainer.appendChild(slideItem2);
}

cloneSlideItem(); // Prefer to clone even in any screen size for the resizing show

// let windowWidth = window.innerWidth;

// if(windowWidth <= 768) {
//   console.log('#### I\'m on mobile view');
//   cloneSlideItem();
// }