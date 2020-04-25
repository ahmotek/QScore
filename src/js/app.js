// import SCSS main partial
import '../sass/main.scss';

// import JS partials - Order matters!!
import '../js/components/loadProducts.js';
import '../js/components/cloneProducts.js';

// this loads too early
import '../js/components/tab.js';
import '../js/components/slider.js';


//- empty files
import './components/resizing.js';

console.log("app.js ended");