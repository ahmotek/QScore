// JS partial to control the toggle of the products selector
const tabNav = document.getElementById('TabNavigation');
const slideNav = document.getElementById('slideNavigation');

var elements = document.querySelectorAll('.slide-item');
var nextButton = document.querySelector('.js-next');
var prevButton = document.querySelector('.js-prev');
var threshold = 200;

var container = document.getElementById('slideContainer');


var getActiveElement = function () {
  elements = document.querySelectorAll('.slide-item');
  var active = 0;
  for (var i = 0; i < elements.length; i++) {
    var item = elements[i];
    if (item.classList.contains('is-active')) {
      active = i;
    }
  }
  var activeElement = elements[active];
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
  removeClassesByPrefix(container, 'slide-');
  goToSlide(clickedIndex);
}

var addBullet = function () {
  var length = elements.length;
  var activeIndex = getActiveElement().index;
  var bulletContainer = document.getElementById('slideNavigation');;
  for (var i = 0; i < length; i++) { 
    var el = document.createElement('div');
    el.classList.add('slide-navigation__item');
    if (i === activeIndex) {
      el.classList.add('is-active');
    }
    var addedElement = bulletContainer.appendChild(el);
    addedElement.addEventListener('click', bulletClick);
  }

  // <span class="slide-navigation__item js-nav-item">
  //             <input type="radio" id="ProdQ1" class="visually-hidden" name="productBundler" value="1">
  //           </span>
}

addBullet();

var getFollowingElement = function(active, prev) {
  elements = document.querySelectorAll('.slide-item');
  var index = active + (prev ? -1 : 1);
  if (active == 0 && prev) {
    index = elements.length - 1;
  } else if (active == elements.length - 1 && !prev) {
    index = 0;
  }
  return {
    element: elements[index],
    index: index
  }
}

var goToSlide = function (index) {
  elements = document.querySelectorAll('.slide-item');
  var active = getActiveElement();
  var activeElement = active.element;
  var activeIndex = active.index;
  activeElement.classList.remove('is-active');
  var following = elements[index];
  following.classList.add('is-active');
  document.querySelector('.slide-navigation__item.is-active').classList.remove('is-active'); //- add index Nº class to parent
  console.log(index);
  container.classList.add('slide-' + Number(index+1));
  var bullet = document.querySelectorAll('.slide-navigation__item');
  bullet[index].classList.add('is-active');
}

var move = function(prev) {
  var active = getActiveElement();
  var activeIndex = active.index;
  var following = getFollowingElement(activeIndex, prev);
  goToSlide(following.index);
};

nextButton.addEventListener('click', function() { 
  removeClassesByPrefix(container, 'slide-');
  move();
});

prevButton.addEventListener('click', function() { 
  removeClassesByPrefix(container, 'slide-');
  move(true);
});


function removeClassesByPrefix(el, prefix)
{
    for(var i = el.classList.length - 1; i >= 0; i--) {
        if(el.classList[i].startsWith(prefix)) {
            el.classList.remove(el.classList[i]);
        }
    }
}

// var isMouseDown = false;
// var startX = 0;
// var currentX = 0;

// var handleMouseDown = function(event) {
//   if (event.target.classList.contains('control')) {
//     return;
//   }
//   isMouseDown = true;
//   startX = event.screenX || event.touches[0].clientX;
//   currentX = event.screenX || event.touches[0].clientX;
// }

// var handleMouseUp = function(event) {
//   isMouseDown = false;
//   if (
//     event.target.classList.contains('control') ||
//     Math.abs(currentX - startX) < threshold
//   ) {
//     return;
//   }
//   if (startX > currentX) {
//     move();
//   } else if (startX < currentX) {
//     move(true);
//   }
//   startX = 0;
//   currentX = 0;
// }

// var handleMouseMove = function(event) {
//   if (isMouseDown) {
//     currentX = event.screenX || event.touches[0].clientX;
//     var active = getActiveElement();
//     var following = getFollowingElement(active.index, startX < currentX);
//   }
// }


// container.addEventListener('mousedown', handleMouseDown);
// container.addEventListener('mouseup', handleMouseUp);
// container.addEventListener('mousemove', handleMouseMove);
// container.addEventListener('touchstart', handleMouseDown);
// container.addEventListener('touchend', handleMouseUp);
// container.addEventListener('touchmove', handleMouseMove);

// document.addEventListener('dragstart', function (ev) {
//   if (event.target.classList.contains('slide-item-image')) {
//     ev.preventDefault();
//     return;
//   }
// })
















// Event Listeners
tabNav.addEventListener('click', function(e) {
  let target = e.target;
  console.log(target);
  selectItem(target); 
});

// slideNav.addEventListener('click', function(e) {
//   let target = e.target;
//   // console.log(target);
//   selectItem(target); 
//   arrowsItem(target);
//   goToSlide();

//   // get element ID - it has the same value as the for of label
//   //- on click translateX(calc(-200% - 80px))

// })

// function toggleIsActive(item) {
//   item.classList.toggle("is-active");
// }

// Assign is-active class to clicked item
function selectItem(el) {
  // console.log(el.classList);
  
  if(el && el.classList.contains('js-nav-item')) {
    let menuItems = el.parentElement.children;

    // console.log(menuItems); // HTMLCollection

    for(var i = 0; i < menuItems.length; i++) {
      if(menuItems[i].classList.contains('is-active')) {
        // console.log(menuItems[i]);

        menuItems[i].classList.remove('is-active');
      }

      el.classList.add('is-active');
    }
  }
}

// function arrowsItem(el) {
//   if(el && el.classList.contains('js-prev')) {
//     console.log(el);
//     console.log(true);
//   }

//   if(el && el.classList.contains('js-next')) {
//     console.log(el);
//     console.log(true);
//   }
// }

function listenOnLoaded() {
  move();
}

document.addEventListener('DOMContentLoaded', listenOnLoaded);
