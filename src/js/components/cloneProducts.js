console.log('## Clone Products - Slide Item');

let i = 0;

// TODO: Optimise with loop
function cloneSlideItem() {
  console.log('cloneSlideItem()');

  // slideContainer parent element to append to.
  const slideContainer = document.getElementById('slideContainer');
  // slideItem[0] element to clone
  const slideItem = document.getElementById('slideItem');
  
  // ## Clone slideItem[1] and its child nodes
  const slideItem1 = slideItem.cloneNode(true);
  // Assign a different ID to cloned element
  slideItem1.id = 'slideItem1';

  // Cloned element 
  // console.log(slideItem1);

  // Change TabNav ID for slideItem1
  // console.log(slideItem1.firstChild.nextElementSibling);
  // let tabNav1 = slideItem1.firstChild.nextElementSibling;

  // console.log(tabNav1.id);
  // tabNav1.id = 'TabNav1';

  // Append cloned slideItem to slideContainer
  slideContainer.appendChild(slideItem1)
  
  // ## Clone slideItem[2] and its child nodes
  const slideItem2 = slideItem.cloneNode(true);

  // Assign a different ID to cloned element
  slideItem2.id = 'slideItem2';
  
  // Change TabNav ID for slideItem1
  // console.log(slideItem2.firstChild.nextElementSibling);
  // let tabNav2 = slideItem2.firstChild.nextElementSibling;

  // console.log(tabNav2.id);
  // tabNav2.id = 'TabNav2';

  // Append cloned slideItem to slideContainer
  slideContainer.appendChild(slideItem2);
}

cloneSlideItem(); // Prefer to clone even in any screen size for the resizing show