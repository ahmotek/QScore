console.log('## Load Products from json');

// function calcSavings(regularPrice, newPrice) {
//   console.log('calcSavings()');

//   console.log(regularPrice, newPrice);
// }

function loadProducts() {
  console.log('load products function');

  let imagePath = 'src/assets/images';

  // Initiate object XMLHttpRequest() from native object
  const xhr = new XMLHttpRequest();

  // open() Method - opens conexion with the server, accepting the following parameters: 
  // 1. the type of request (GET); 
  // 2. the file we want to reach (customer.json);
  // 3. asynchronous = true;
  xhr.open('GET', 'src/json/products.json', true);

  // onload() - checks conexion status and manipulates data
  xhr.onload = function () {
    // Test HTTP request Status
    // HTTP STATUSES: https://httpstatuses.com/
    // 200: "OK"
    // 403: "Forbiden"
    // 404: "Not Found"
    // this = xhr Object

    if (this.status === 200) {
      // console.log(this.responseText); // check if gets the json data

      // parse it as an object
      const products = JSON.parse(this.responseText);

      console.log(products.length); // 3

      // output products array within a loop
      let productsOutput = ''; // won't need it
      let imageNameOutput = '';
      let regularPriceOutput = '';
      let newPriceOutput = '';

      products.forEach(function (product) {
        productsOutput += `
          <ul id="TabNav" class="tab-nav js-nav">
            <li class="tab-nav__item js-nav-item is-active">${product.name}</li>
            <li class="tab-nav__item js-nav-item">${product.name}</li>
            <li class="tab-nav__item js-nav-item">${product.name}</li>
          </ul>
          <img src="${imagePath}/${product.imageName}" class="product-image" alt="Energy renew dietary supplement ${product.quantity} pot">
          <div class="display">
            <div class="display__item">
              <div class="display__item-title">Regular Price:</div>
              <div class="display__item-value display__item-value--neg">${product.regularPrice}</div>
            </div>
            <div class="display__item hide-small">
              <div class="display__item-title">Today's Discount:</div>
              <div class="display__item-value display__item-value--pos">${product.regularPrice}</div>
            </div>
            <div class="display__item">
              <div class="display__item-title">Instant Savings:</div>
              <div class="display__item-value display__item-value--pos">${product.regularPrice}</div>
            </div>
            <div class="display__item display__item--shipping">
              <div class="display__item-title">
                <svg class="icon icon--section-grid">
                  <use xlink:href="/src/assets/images/sprite.svg#SHIPPING" />
                </svg>Shipping:
              </div>
              <div class="display__item-value display__item-value--pos">FREE</div>
            </div>
          </div>
          <div class="price">
            <span class="price__currency">$</span><span class="price__integer">121</span>.<span
              class="price__decimals">95</span> ${product.newPrice}
          </div>
          <div class="price-legend">(This is a one time payment)</div>
        `;

        console.log(productsOutput);

        imageNameOutput = `
          <img src="${imagePath}/${product.imageName}" class="product-image" alt="Energy renew dietary supplement ${product.quantity} pot">
        `;
        // console.log(imageNameOutput); // gets each image

        regularPriceOutput = `
          <img src="${imagePath}/${product.imageName}" class="product-image" alt="Energy renew dietary supplement ${product.quantity} pot">
        `;

      });

      // document.getElementById('XX').innerHTML = productsOutput;

      // document.getElementById('slideItem').innerHTML = imageNameOutput;
    }
  }

  // send() - to receive data
  xhr.send();
}

document.addEventListener('DOMContentLoaded', loadProducts);

/* ProductInfo markup
<ul id="TabNav" class="tab-nav js-nav">
              <li class="tab-nav__item js-nav-item is-active">${products[0].product.name}</li>
              <li class="tab-nav__item js-nav-item">${products[1].product.name}</li>
              <li class="tab-nav__item js-nav-item">${products[2].product.name}</li>
            </ul>
<div class="display">
                <div class="display__item">
                  <div class="display__item-title">Regular Price:</div>
                  <div class="display__item-value display__item-value--neg">$209.85</div>
                </div>
                <div class="display__item hide-small">
                  <div class="display__item-title">Today's Discount:</div>
                  <div class="display__item-value display__item-value--pos">$12.90</div>
                </div>
                <div class="display__item">
                  <div class="display__item-title">Instant Savings:</div>
                  <div class="display__item-value display__item-value--pos">$87.90</div>
                </div>
                <div class="display__item display__item--shipping">
                  <div class="display__item-title">
                    <svg class="icon icon--section-grid">
                      <use xlink:href="/src/assets/images/sprite.svg#SHIPPING" />
                    </svg>Shipping:
                  </div>
                  <div class="display__item-value display__item-value--pos">FREE</div>
                </div>
              </div>
              <div class="price">
                <span class="price__currency">$</span><span class="price__integer">121</span>.<span
                  class="price__decimals">95</span>
              </div>
              <div class="price-legend">(This is a one time payment)</div>
              */



              // const list = document.getElementById('bookList');

      // 2. Create row element <tr> to add later to our tbody#bookList
      // const row = document.createElement('tr');