console.log('## Load Products from json');

document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
  console.log('load products function');

  let imagePath = 'src/assets/images';

  // Initiate object XMLHttpRequest() from native object
  const xhr = new XMLHttpRequest();

  // open() Method - opens conexion with the server, accepting the following parameters: 
  // 1. the type of request (GET); 2. the file we want to reach (customer.json); 3. asynchronous = true;
  xhr.open('GET', 'src/json/products.json', true);

  // onload() - checks conexion status and manipulate data
  xhr.onload = function () {
    // Test HTTP request Status
    // HTTP STATUSES: https://httpstatuses.com/
    // 200: "OK"
    // 403: "Forbiden"
    // 404: "Not Found"
    // this = xhr Object

    if (this.status === 200) {
      // console.log(this.responseText); // check if gets the json data

      // parse it as the object products
      const products = JSON.parse(this.responseText);

      // Check products & products.length
      console.log(products);
      console.log(products.length); // 3

      // output products array within a loop
      let slideItemOutput = '';

      products.forEach(function (product) {
        // console.log(product.id);
        // console.log(product.name);

        // Calculate Savings
        var calculateSavings = function(productRegularPrice, productNewPrice) {
          // console.log(productRegularPrice);
          // console.log(productNewPrice);

          let savingsVal = productRegularPrice - productNewPrice;

          return savingsVal;
        }

        calculateSavings(product.regularPrice, product.newPrice);
        
        // console.log(calculateSavings(product.regularPrice, product.newPrice));

        // TODO: Split number of newPrice
        // https://stackoverflow.com/questions/9098776/how-to-split-a-decimal-by-its-dot-into-integers-using-javascript
        var splitNewPrice = function(newPrice) {
          var newPriceToSplit = newPrice;
          var newPriceToString = newPriceToSplit.toString();
          var newPriceArray = newPriceToString.split('.');

          var newPriceSplited = new Array();
          newPriceSplited = newPriceArray;

          // console.log(newPriceSplited[0], newPriceSplited[1])

          var newPriceNode = `<span class="price__integer">${newPriceSplited[0]}</span>.<span
          class="price__decimals">${newPriceSplited[1]}</span>`;

          return newPriceNode;
        }

        splitNewPrice(product.newPrice);

        // console.log(splitNewPrice(product.newPrice));

        slideItemOutput += `
        <div id="slideItem${product.id}" class="slide-item is-active">
          <ul id="TabNav${product.id}" class="tab-nav js-nav">
            <li class="tab-nav__item js-nav-item is-active">${products[0].name}</li>
            <li class="tab-nav__item js-nav-item">${products[1].name}</li>
            <li class="tab-nav__item js-nav-item">${products[2].name}</li>
          </ul>
          <img src="${imagePath}/${product.imageName}" class="product-image" alt="Energy renew dietary supplement ${product.quantity} pot">
          <div class="display">
            <div class="display__item">
              <div class="display__item-title">Regular Price:</div>
              <div class="display__item-value display__item-value--neg">${product.currency}${product.regularPrice}</div>
            </div>
            <div class="display__item hide-small">
              <div class="display__item-title">Today's Discount:</div>
              <div class="display__item-value display__item-value--pos">${product.currency}${product.regularPrice}</div>
            </div>
            <div class="display__item">
              <div class="display__item-title">Instant Savings:</div>
              <div class="display__item-value display__item-value--pos">${product.currency}${calculateSavings(product.regularPrice, product.newPrice)}</div>
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
            <span class="price__currency">${product.currency}</span>${splitNewPrice(product.newPrice)}
          </div>
          <div class="price-legend">(This is a one time payment)</div>
          </div>
        `;

        // console.log(slideItemOutput.length);
      });

      document.getElementById('slideContainer').innerHTML = slideItemOutput;

      // document.getElementById('slideItem').innerHTML = imageNameOutput;
    }
  }

  xhr.onerror = function() {
    console.log('request error...');
  }

  // send() - to receive data
  xhr.send();
}



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