// # This partial controls the tab navigation functionality

const tabNavigation = document.getElementById('TabNav');
const productForm = document.getElementById('productForm');

const activeSlideItem = document.querySelector('.js-slide-nav.is-active');
const activeTabItem = document.querySelector('.js-tab-nav.is-active');

const tabNavigationItems = document.getElementsByClassName('js-tab-nav');
const slideNavigationItems = document.getElementsByClassName('js-slide-nav');

// Event Listeners
if(tabNavigation) {
  // console.log(tabNavigation);

  tabNavigation.addEventListener('click', function (e) {
    let target = e.target;
    // console.log(target);

    if(target.tagName === 'LI') {
      tabItemCliked(target);
    }
  });
}

// Assign is-active class to clicked item
function tabItemCliked(clickedItem) {
  // console.log('tabItemCliked()');
  // console.log(el.classList);

  if (tabNavigationItems.length === slideNavigationItems.length) {
    for (var i = 0; i < tabNavigationItems.length; i++) {
      // Remove is-active from any tabNavigationItems or slideNavigationItems

      if (tabNavigationItems[i].classList.contains('is-active')) {
        // console.log(tabNavigationItems[i]); 

        tabNavigationItems[i].classList.remove('is-active');
        slideNavigationItems[i].classList.remove('is-active');
      }

      if(activeSlideItem) {
        activeSlideItem.classList.remove('is-active');
      }
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

        slideNavigationItems[i].classList.add('is-active');

      }
    }
  }
}

function removeClassesByPrefix(el, prefix) {
  // console.log('removeClassesByPrefix()');

  for (var i = el.classList.length - 1; i >= 0; i--) {
    if (el.classList[i].startsWith(prefix)) {
      el.classList.remove(el.classList[i]);
    }
  }
}