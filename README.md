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

*Solution:* Replace image with a PNG file with transparency otherwise the use of a radial-gradient won't visually work.
Image was optimised and weights less than the provided one.

2. Missing icons:
2.1. Shipping
2.2. Buy now
2.3. Tick icon of '100 Pure' section list
2.4. Chevron for slide

3. All SVG icons were included into a SVG sprite - it is light, easier to control via CSS and by binding them all on one file, will only execute 1 http request;

### Expected Behaviour:
1. Responsive;
2. Maintainable and Reusable components;
3. Performance;
4. Pixel perfect;
5. Functionality;

### Not delivered
'Daily Discount' percentage base is not clear. From the UX perspective, users may have trouble understanding it.

### Provided UI - Defects for QA
1. Heading Mobile content is different than Heading Desktop - used Heading Desktop and adapted font size to fit;
2. 'Online-Only' font-family is different between desktop and mobile (Myriad Pro on Desktop) - applied mobile version font-family (Quicksand)
3. On the PSB file, distances between elements (mainly vertical margins) doen't follow a mathematical logic.
It was sligtly aligned on the CSS side.

### Notes:
1. Should use @import from google fonts but is creates FAUX while working. Fonts are being loaded locally.
```
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Raleway:wght@300;400;700;900&display=swap');
</style>
```
2. Images from html are not being cloned to dist folder as well as the json file... :( (related to webpack misconfiguration)
3. Max resolution tested = 1440px. Top-left image will probably require more responsive definitions on CSS, for bigger screens.
4. Mobile test should have been done with more detail.

#### Consider future iteration:
1. Code Refactor :)
2. Instead of inserting all dynamic data once via 'innerHTML', should include each value separately into its Node.
3. Improve slide arrows functionality selection between Mobile and Desktop.

#### Time spent:
Around 4 1/2 days including:
1. Setup and refine webpack, node and npm configurations; 
2. Define basic CSS variables to meet layout requirements; 
3. Javascript functionality;
4. Testing;
5. Cleanup files and review code.

### Online version: http://www.dehecho.com/works/qualityScore/
