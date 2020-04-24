// JS partial to control the toggle of the products selector
const tabNav = document.getElementById('TabNavigation');
const slideNav = document.getElementById('slideNavigation');

const slideItem = document.querySelectorAll('.slide-item');

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

tabNav.addEventListener('click', function(e) {
  let target = e.target;
  // console.log(target);
  selectItem(target); 
});

slideNav.addEventListener('click', function(e) {
  let target = e.target;
  // console.log(target);
  selectItem(target); 
  arrowsItem(target);
  positionActiveSlide();

  // get element ID - it has the same value as the for of label
  //- on click translateX(calc(-200% - 80px))

})

// function toggleIsActive(item) {
//   item.classList.toggle("is-active");
// }

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

function arrowsItem(el) {
  if(el && el.classList.contains('js-prev')) {
    console.log(el);
    console.log(true);
  }

  if(el && el.classList.contains('js-next')) {
    console.log(el);
    console.log(true);
  }
}

var getActiveSlide = function() {
  // console.log(slideItem);

  var isActive = 0;

  for (var i = 0; i < slideItem.length; i++) {
    var slide = slideItem[i];

    if (slide.classList.contains('is-active')) {
      isActive = i;
    }
  }

  var activeSlide = slideItem[isActive];
  
  return {
    element: activeSlide,
    index: isActive
  };
}

var getFollowingElement = function(isActive, prev) {
  var index = isActive + (prev ? -1 : 1);

  if (isActive == 0 && prev) {
    index = slideItem.length - 1;

  } else if (isActive == slideItem.length - 1 && !prev) {
    index = 0;
  }
  return {
    element: slideItem[index],
    index: index
  }
}

console.log(getFollowingElement());

function positionActiveSlide(index) {

  console.log(getActiveSlide());
  console.log(slideItem);

  var activeSlide = getActiveSlide();
  var isActiveElement = activeSlide.element;
  console.log(isActiveElement);
  var isActiveIndex = activeSlide.index;
  console.log(isActiveIndex);
  isActiveElement.classList.remove('is-active');
  var following = slideItem[index];
  console.log(following);
  following.classList.add('is-active');
  // document.querySelector('.bullet.active').classList.remove('active');
  // var bullet = document.querySelectorAll('.bullet');
  // bullet[index].classList.add('active');

}

// var bulletClick = function (event) {
//   var bullets = document.querySelectorAll('.bullet');
//   var clickedBullet = event.target;
//   var clickedIndex = Array.prototype.indexOf.call(bullets, clickedBullet);
//   var activeBullet = document.querySelector('.bullet.active');
//   activeBullet.classList.remove('active');
//   clickedBullet.classList.add('active');
//   goToSlide(clickedIndex);
// }

// $("input[name='sport']").click(function(){
//   $("input[name='sport']").removeClass('className');   
//   $(this).addClass('className');
// });

// function check() {
//   document.getElementById("red").checked = true;
// }

// function uncheck() {
//   document.getElementById("red").checked = false;
// }