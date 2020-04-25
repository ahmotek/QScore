# Landing Page
Assignment by Laura Garcia

## Specifications:
On mobile : 
1. The right section disappear ('100 pure');
2. The middle section turns into a slider

On desktop: 
1. Prices changes according to the selected number of products; 
2. 'Instant Savings' is being calculated by difference; 
3. 'Todays discount' is being calculated in percentage.


1 product:
Regular Price: $74.95
New price: $49.95

3 product:
Regular Price: $224.85
New price: $134.85

6 product:
Regular Price: $449.70
New price: $254.70

## Development dependencies:
Require NodeJS, npm and  Webpack;

### Install all dependecies
```
npm i
```

### Run project:
```
npm run build
```

### Run tests:
```
TBD
```

## Remarks:

### Provided & Created Assets
1. 'energy-renew.jpg' was provided with a background color that does not match the PSB background file;
Solution: To serve a PNG file with transparency otherwise the use of a radial-gradient won't visually work.

2. Missing icons:
2.1. Shipping
2.2. Buy now
2.3. Tick icon of '100 Pure' section list
2.4. Chevron for slide

Note #1: some of the missing icons may be acquired with font awesome (eg: chevron) but since there are already svg icons on the project, it is preferable to avoid loading another font.

Note #2: 

3. All SVG icons should be organized in a SVG sprite - it is light, easier to control via CSS and by binding them all in one file only,  will reduce http requests;


### Expected Behaviour:
1. Responsive;
2. Maintainable and Reusable components;
3. Performance;
4. Pixel perfect;

### Issues

### Not delivered

### UI Defects
1. Heading Mobile content is different than Heading Desktop - used Heading Desktop and adapted to fit;

2. 'Online-Only' font-family is different between desktop and mobile (Myriad Pro on Desktop) - applied mobile version font-family (Quicksand)

3. PSB styles are not pixel perfect but all 'unlogic' distances were sligtly aligned.

4. Nice to have would be showing image of product on desktop by replacing existent one.


### Notes:
1. Should use @import from google fonts and refactor CSS font-family value but google didn't API respond. Will check it later.
```
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Raleway:wght@300;400;700;900&display=swap');
</style>
```
2. Images from html are not being cloned to dist folder... :(

3. When on desktop select 6 Jars option and the resize, 6 Jars should be selected.

4. instead of innerHTML all slideItems could have injected each value of product.

### Time spent:
21 April - 2h for clone project base, refine webpack config and define basic variables to meet requirements;
22 April - html markup & styling - 75% done for the CSS work;