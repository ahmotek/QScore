console.log('## Tabs UI and Functionality');

const tabNav = document.getElementById('TabNav');

// Event Listeners
tabNav.addEventListener('click', function (e) {
  let target = e.target;
  console.log(target);
  selectItem(target);
});

// Assign is-active class to clicked item
function selectItem(el) {
  console.log('selectItem()');
  // console.log(el.classList);

  if (el && el.classList.contains('js-nav-item')) {
    let menuItems = el.parentElement.children;
    // console.log(menuItems); // HTMLCollection

    for (var i = 0; i < menuItems.length; i++) {
      if (menuItems[i].classList.contains('is-active')) {
        // console.log(menuItems[i]);

        menuItems[i].classList.remove('is-active');
      }

      el.classList.add('is-active');
    }
  }
}