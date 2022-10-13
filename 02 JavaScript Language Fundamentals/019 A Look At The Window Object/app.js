'use strict';
// WINDOW METHODS / OBJECTS / PROPERTIES

console.log(123);

// Alert
alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
if (confirm('Are you sure?')) {
  console.log('Yes please');
} else {
  console.log('No thank you');
}

let val;
// Outter height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname;

console.log(val);
