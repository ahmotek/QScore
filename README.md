# Landing Page for Quality Score
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
There are no written tests on this project.
```

## Remarks:

### Provided & Created Assets
1. 'energy-renew.jpg' was provided with a background color. 
If adding the gradient to a higher layer of the image it may cause overlaping of these elements when resizing. 
This is not a risk I want to take;
*Solution:* To serve a PNG file with transparency otherwise the use of a radial-gradient won't visually work.
Image was optimised and weights less than the provided one.

2. Missing icons:
2.1. Shipping
2.2. Buy now
2.3. Tick icon of '100 Pure' section list
2.4. Chevron for slide

3. All SVG icons were included into a SVG sprite - it is light, easier to control via CSS and by binding them all in one file only, will only execute 1 http request;


### Expected Behaviour:
1. Responsive;
2. Maintainable and Reusable components;
3. Performance;
4. Pixel perfect;
5. Functionality;

### Issues

### Not delivered
Couldn't understand what 'Daily Discount' percentage was about.

### Provided UI Defects for QA
1. Heading Mobile content is different than Heading Desktop - used Heading Desktop and adapted font size to fit;

2. 'Online-Only' font-family is different between desktop and mobile (Myriad Pro on Desktop) - applied mobile version font-family (Quicksand)

3. On the PSB, distances between elements (mainly vertical margins) doen't follow a mathematical logic.
It was sligtly aligned on the CSS side.

### Notes:
1. Should use @import from google fonts but is creates FAUX while working. Fonts are locally loaded.
```
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Raleway:wght@300;400;700;900&display=swap');
</style>
```
2. Images from html are not being cloned to dist folder as well as the json file... :( (related to webpack configuration)

3. Instead of inserting all slide dynamic data via innerHTML, it should be added on exact node element.

4. Max resolution tested = 1440px. Top-left image will probably require more responsive definitions on CSS for bigger screens.

5. *Nice to have:* When selecting the desired product on destop, the existent image could be replaced by the choosen option.

### Time spent:
Around 4 1/2 days in between:
Setup and refine webpack, node and npm configurations; 
Define basic variables to meet requirements; 
HTML markup & CSS - 75% done for the CSS work;
Cleanup files and review code.