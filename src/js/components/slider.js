// # This partial controls the slide navigation functionality

const slideNav = document.getElementById('slideNavigation');

const slideItem = document.querySelectorAll('.slide-item');
const buttonNext = document.querySelector('.js-next');
const buttonPrev = document.querySelector('.js-prev');

const slider = document.getElementById('slideContainer');
const productForm = document.getElementById('productForm');

//- getActiveElement var with an anonymous function assigned (Funtion Expression):
//- 1. set active items to 0
//- 2. loop through all slideItem.length
//- 3. reach the item whith .is-active
//- 4. set active items to i
//- 5. slideItem index of active index
//- 6. return activeElement and its index

var getActiveElement = function () {
  // console.log('getActiveElement()');

  var active = 0;

  // console.log(slideItem.length);

  for (var i = 0; i < slideItem.length; i++) {
    var item = slideItem[i];

    // console.log(item);

    if (item.classList.contains('is-active')) {
      active = i;
    }
  }

  var activeElement = slideItem[active];

  return {
    element: activeElement,
    index: active
  };
}

//- paginationItemClick expression with anonymous function:
//- 1. get all slideNavigationItems
//- 2. clickedItem: target element
//- 3. clickedIndex: index of clicked item in slideNavigationItems
//- 4. select activeSlideItem (before step 5)
//- 5. activeSlideItem remove active class
//- 6. clickedItem add active class
//- 7. call removeClassesByPrefix(); to remove existent slide- classes
//- 8. call goToSlide() passing clickedIndex val

var paginationItemClick = function (e) {
  // console.log('paginationItemClick()');

  const slideNavigationItems = document.getElementsByClassName('js-slide-nav');
  const tabNavigationItems = document.getElementsByClassName('js-tab-nav');
  
  const activeSlideItem = document.querySelector('.js-slide-nav.is-active');
  const activeTabItem = document.querySelector('.js-tab-nav.is-active');
  
  var clickedItem = e.target;
  var clickedIndex = Array.prototype.indexOf.call(slideNavigationItems, clickedItem);
  
  var activeIndex = getActiveElement().index;

  // console.log(slideNavigationItems);
  // console.log(clickedIndex);

  if (slideNavigationItems.length === tabNavigationItems.length) {
    for (var i = 0; i < slideNavigationItems.length; i++) {
      // Remove class from any tabNavigationItems or slideNavigationItems
      if (slideNavigationItems[i].classList.contains('is-active')) {
        // console.log(slideNavigationItems[i]);

        slideNavigationItems[i].classList.remove('is-active');
        tabNavigationItems[i].classList.remove('is-active');
      }

      activeSlideItem.classList.remove('is-active');
      activeTabItem.classList.remove('is-active');
      clickedItem.classList.add('is-active');

      // console.log(clickedItem);
      // console.log(clickedItem.dataset.product);

      if (clickedItem.dataset.product === `prod${i + 1}`) {
        // console.log(`clickedItem.dataset.product === prod${i+1}`)
        // console.log(i);
        // console.log(clickedItem);

        removeClassesByPrefix(productForm, 'slide-');

        productForm.classList.add('slide-' + Number(i + 1));

        // var activeSlide = document.getElementById('slideItem' + Number(i + 1));

        // console.log(activeSlide);

        tabNavigationItems[i].classList.add('is-active');

      }

      if (i === activeIndex) {
        clickedItem.classList.add('is-active');
      }
    }
  }

  removeClassesByPrefix(productForm, 'slide-');
  goToSlide(clickedIndex);
}

var paginationItem = function () {
  // console.log('paginationItem()');

  var length = slideItem.length;
  var activeIndex = getActiveElement().index;
  var paginationItemContainer = slideNav;
  
  for (var i = 0; i < length; i++) { 
    var el = document.createElement('span');
    
    el.classList.add('slide-navigation__item', 'js-slide-nav');
    el.dataset.product = `prod${i + 1}`;

    if (i === activeIndex) {
      el.classList.add('is-active');
    }

    var addedPaginationItem = paginationItemContainer.appendChild(el);
    
    // add eventListener to dynamically created Nodes
    addedPaginationItem.addEventListener('click', paginationItemClick);
  }
}

paginationItem();

var getFutureItem = function (active, prev) {
  // console.log('getFutureItem()');

  var index = active + (prev ? -1 : 1);

  if (active == 0 && prev) {
    index = slideItem.length - 1;
  
  } else if (active == slideItem.length - 1 && !prev) {
    index = 0;
  
  }
  
  return {
    element: slideItem[index],
    index: index
  }
}

var goToSlide = function (index) {
  // console.log('goToSlide()');

  var active = getActiveElement();
  var activeElement = active.element;
  // var activeIndex = active.index;
  
  activeElement.classList.remove('is-active');
  
  var futureItem = slideItem[index];

  futureItem.classList.add('is-active');
  document.querySelector('.js-slide-nav.is-active').classList.remove('is-active'); //- To add index Nº class to parent
  
  // console.log(index);
  productForm.classList.add('slide-' + Number(index + 1)); //- add index to slider wrapper

  // Storage paginationItem and assign active class
  var paginationItem = document.querySelectorAll('.js-slide-nav');

  paginationItem[index].classList.add('is-active');

  if(index === 0) {
    buttonPrev.classList.add('is-disabled');
  } else {
    buttonPrev.classList.remove('is-disabled');
  }

  if(index === 2) {
    buttonNext.classList.add('is-disabled');
  } else {
    buttonNext.classList.remove('is-disabled');
  }
}

var arrowButton = function (prev) {
  // console.log('arrowButton()');

  var active = getActiveElement();
  var activeIndex = active.index;
  var futureItem = getFutureItem(activeIndex, prev);

  removeClassesByPrefix(productForm, 'slide-');
  goToSlide(futureItem.index);
};

function removeClassesByPrefix(el, prefix) {
  // console.log('removeClassesByPrefix()');

  for (var i = el.classList.length - 1; i >= 0; i--) {
    if (el.classList[i].startsWith(prefix)) {
      el.classList.remove(el.classList[i]);
    }
  }
}

buttonNext.addEventListener('click', function () {
  arrowButton();
});

buttonPrev.addEventListener('click', function () {
  arrowButton(true);
});

// productForm.addEventListener('change', function() {
//   paginationItem();
// });

// export default paginationItem;
// document.addEventListener('DOMContentLoaded', paginationItem);