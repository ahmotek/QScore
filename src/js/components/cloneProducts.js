// # This partial controls the cloning of the slide item

function cloneSlideItem() {
  // console.log('cloneSlideItem()');

  // slide parent element to append
  const slide = document.getElementById('slideContainer');
  // slideItem[0] element to clone
  const slideItem = document.getElementById('slideItem');
  
  // ## Clone slideItem[1] and its child nodes
  const slideItem1 = slideItem.cloneNode(true);
  // Assign a different ID to cloned element
  slideItem1.id = 'slideItem1';

  // Cloned element 
  // console.log(slideItem1);

  // Append cloned slideItem to slide
  slide.appendChild(slideItem1)
  
  // ## Clone slideItem[2] and its child nodes
  const slideItem2 = slideItem.cloneNode(true);

  // Assign a different ID to cloned element
  slideItem2.id = 'slideItem2';
  
  // Append cloned slideItem to slide
  slide.appendChild(slideItem2);
}

cloneSlideItem();