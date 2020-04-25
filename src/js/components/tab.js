console.log('## 4. Tabs UI and Functionality');

const tabNav = document.getElementById('TabNav1');
const slider = document.getElementById('slideContainer');

console.log('slideContainer');

// Event Listeners
if(slider) {
  console.log(slider);

  slider.addEventListener('click', function (e) {
    let target = e.target;
    console.log(target);
    // Do If checkin the element type
    selectItem(target);
  });
}

// Assign is-active class to clicked item
function selectItem(selectItem) {
  console.log('selectItem()');
  // console.log(el.classList);

  if (selectItem && selectItem.classList.contains('js-nav-item')) {
    let menuItems = selectItem.parentElement.children;
    console.log(menuItems); // HTMLCollection

    for (var i = 0; i < menuItems.length; i++) {
      // Remove class from any menuItems
      if (menuItems[i].classList.contains('is-active')) {
        console.log(menuItems[i]); // 

        menuItems[i].classList.remove('is-active');
      }

      selectItem.classList.add('is-active');

      console.log(selectItem);
      console.log(selectItem.dataset.product);

      if(selectItem.dataset.product === `prod${i + 1}`) {
        console.log(`selectItem.dataset.product === prod${i+1}`)
        console.log(i);
        console.log(selectItem);

        removeClassesByPrefix(slider, 'slide-');

        slider.classList.add('slide-' + Number(i + 1));

        var activeSlide = document.getElementById('slideItem' + Number(i + 1));

        console.log(activeSlide);
      }
    }
  }
}

function removeClassesByPrefix(el, prefix) {
  console.log('removeClassesByPrefix()');

  for (var i = el.classList.length - 1; i >= 0; i--) {
    if (el.classList[i].startsWith(prefix)) {
      el.classList.remove(el.classList[i]);
    }
  }
}

// document.addEventListener('DOMContentLoaded', function () {
  
// });