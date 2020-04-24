// SLIDER partial 
const slideNav = document.getElementById('slideNavigation');

let slideItem = document.querySelectorAll('.slide-item');
var nextButton = document.querySelector('.js-next');
var prevButton = document.querySelector('.js-prev');
var threshold = 200;

var slider = document.getElementById('slideContainer');


var getActiveElement = function () {
  // slideItem = document.querySelectorAll('.slide-item');
  
  var active = 0;

  for (var i = 0; i < slideItem.length; i++) {
    var item = slideItem[i];

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

var bulletClick = function (event) {
  var bullets = document.querySelectorAll('.slide-navigation__item');
  var clickedBullet = event.target;
  var clickedIndex = Array.prototype.indexOf.call(bullets, clickedBullet);
  var activeBullet = document.querySelector('.slide-navigation__item.is-active');
  activeBullet.classList.remove('is-active');
  clickedBullet.classList.add('is-active');
  removeClassesByPrefix(slider, 'slide-');
  goToSlide(clickedIndex);
}

var addBullet = function () {
  var length = slideItem.length;
  var activeIndex = getActiveElement().index;
  var bulletContainer = document.getElementById('slideNavigation');;
  for (var i = 0; i < length; i++) { 
    var el = document.createElement('span');
    el.classList.add('slide-navigation__item');
    if (i === activeIndex) {
      el.classList.add('is-active');
    }
    var addedElement = bulletContainer.appendChild(el);
    addedElement.addEventListener('click', bulletClick);
  }
}

addBullet();

var getFollowingElement = function (active, prev) {
  // slideItem = document.querySelectorAll('.slide-item');
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
  // slideItem = document.querySelectorAll('.slide-item');
  var active = getActiveElement();
  var activeElement = active.element;
  var activeIndex = active.index;
  activeElement.classList.remove('is-active');
  var following = slideItem[index];
  following.classList.add('is-active');
  document.querySelector('.slide-navigation__item.is-active').classList.remove('is-active'); //- add index Nº class to parent
  console.log(index);
  slider.classList.add('slide-' + Number(index + 1));
  var bullet = document.querySelectorAll('.slide-navigation__item');
  bullet[index].classList.add('is-active');

  if(index === 0) {
    prevButton.classList.add('is-disabled');
    prevButton.disabled = true;
  } else {
    prevButton.classList.remove('is-disabled');
  }

  if(index === 2) {
    nextButton.classList.add('is-disabled');
    nextButton.disabled = true;
  } else {
    nextButton.classList.remove('is-disabled');
  }

  if(activeIndex != 0) {
    
  }

  if(activeIndex != 2) {
    
  }
}

var move = function (prev) {
  var active = getActiveElement();
  var activeIndex = active.index;
  var following = getFollowingElement(activeIndex, prev);

  removeClassesByPrefix(slider, 'slide-');
  goToSlide(following.index);
};

nextButton.addEventListener('click', function () {
  move();
});

prevButton.addEventListener('click', function () {
  move(true);
});


function removeClassesByPrefix(el, prefix) {
  for (var i = el.classList.length - 1; i >= 0; i--) {
    if (el.classList[i].startsWith(prefix)) {
      el.classList.remove(el.classList[i]);
    }
  }
}

function listenOnLoaded() {
  var active = getActiveElement();
  var activeIndex = active.index;
  console.log(activeIndex);
  slider.classList.add('slide-' + Number(activeIndex + 1));
}

document.addEventListener('DOMContentLoaded', listenOnLoaded);
