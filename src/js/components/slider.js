console.log('## Slider UI and Functionality');

const slideNav = document.getElementById('slideNavigation');

let slideItem = document.querySelectorAll('.slide-item');
var buttonNext = document.querySelector('.js-next');
var buttonPrev = document.querySelector('.js-prev');
var threshold = 200;

var slider = document.getElementById('slideContainer');

//- getActiveElement var with an anonymous function assigned (Funtion Expression):
//- 1. set active items to 0
//- 2. loop through all slideItem.length
//- 3. reach the item whith .is-active
//- 4. set active items to i
//- 5. slideItem index of active index
//- 6. return activeElement and its index

var getActiveElement = function () {
  console.log('getActiveElement()');

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
//- 1. get all paginationItems
//- 2. clickedItem: target element
//- 3. clickedIndex: index of clicked item in paginationItems
//- 4. select activeItem (before step 5)
//- 5. activeItem remove active class
//- 6. clickedItem add active class
//- 7. call removeClassesByPrefix(); to remove existent slide- classes
//- 8. call goToSlide() passing clickedIndex val

var paginationItemClick = function (e) {
  console.log('paginationItemClick()');

  var paginationItems = document.querySelectorAll('.slide-navigation__item');
  var clickedItem = e.target;
  var clickedIndex = Array.prototype.indexOf.call(paginationItems, clickedItem);
  var activeItem = document.querySelector('.slide-navigation__item.is-active');
  
  // console.log(paginationItems);
  // console.log(clickedIndex);

  activeItem.classList.remove('is-active');
  clickedItem.classList.add('is-active');
  removeClassesByPrefix(slider, 'slide-');
  goToSlide(clickedIndex);
}

var paginationItem = function () {
  console.log('paginationItem()');

  var length = slideItem.length;
  var activeIndex = getActiveElement().index;
  var paginationItemContainer = document.getElementById('slideNavigation');;
  
  for (var i = 0; i < length; i++) { 
    var el = document.createElement('span');
    
    el.classList.add('slide-navigation__item');

    if (i === activeIndex) {
      el.classList.add('is-active');
    }

    var addedPaginationItem = paginationItemContainer.appendChild(el);
    
    addedPaginationItem.addEventListener('click', paginationItemClick);
  }
}

paginationItem();

var getFutureItem = function (active, prev) {
  console.log('getFutureItem()');

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
  console.log('goToSlide()');

  var active = getActiveElement();
  var activeElement = active.element;
  // var activeIndex = active.index;
  
  activeElement.classList.remove('is-active');
  
  var futureItem = slideItem[index];

  futureItem.classList.add('is-active');
  document.querySelector('.slide-navigation__item.is-active').classList.remove('is-active'); //- add index Nº class to parent
  
  // console.log(index);
  slider.classList.add('slide-' + Number(index + 1));

  // Storage paginationItem and assign active class
  var paginationItem = document.querySelectorAll('.slide-navigation__item');

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
  console.log('arrowButton()');

  var active = getActiveElement();
  var activeIndex = active.index;
  var futureItem = getFutureItem(activeIndex, prev);

  removeClassesByPrefix(slider, 'slide-');
  goToSlide(futureItem.index);
};

buttonNext.addEventListener('click', function () {
  arrowButton();
});

buttonPrev.addEventListener('click', function () {
  arrowButton(true);
});

function removeClassesByPrefix(el, prefix) {
  console.log('removeClassesByPrefix()');

  for (var i = el.classList.length - 1; i >= 0; i--) {
    if (el.classList[i].startsWith(prefix)) {
      el.classList.remove(el.classList[i]);
    }
  }
}