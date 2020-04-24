console.log('## responsive UI - empty');
// JS partial to control responsiveness of the form
// following https://stackoverflow.com/questions/45905160/javascript-on-window-resize-end
// function debounce(func){
//   console.log('debounce()');

//   var timer;

//   return function(event){
//     if(timer) clearTimeout(timer);
//     timer = setTimeout(func,100,event);
//   };
// }

// window.addEventListener('resize',debounce(function(e){
//   console.log('end of resizing');
//   // let windowWidth = window.innerWidth;
//   // let windowHeight = window.innerHeight;

//   // console.log(windowWidth + ' X ' + windowHeight);
//   // console.log(typeof(windowWidth) + ' X ' + typeof(windowHeight));

//   // if(windowWidth <= 768) {
//   //   console.log('#### I\'m on mobile view');
//   //   cloneSlideItem();

//   // } else {
//   //   console.log('#### I\'m on desktop view');
//     // deleteSlideItem();

//   // }

// }));