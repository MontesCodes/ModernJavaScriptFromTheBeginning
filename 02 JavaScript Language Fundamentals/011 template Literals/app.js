'use strict';

const personName = 'Monties';
const age = 30;
const job = 'Front End Developer';
const city = 'Miami';
let html;

// Without Template Strings (es5)
html =
  '<ul><li>Name: ' +
  personName +
  '</li><li>Age: ' +
  ' </li><li>Job: ' +
  job +
  ' </li><li>City: ' +
  city +
  ' </li></ul>';

document.body.innerHTML = html;
