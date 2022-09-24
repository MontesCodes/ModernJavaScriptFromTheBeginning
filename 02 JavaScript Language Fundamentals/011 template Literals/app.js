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
  age +
  ' </li><li>Job: ' +
  job +
  ' </li><li>City1: ' +
  city +
  ' </li></ul>';

// old way
html =
  '<ul>' +
  '<li>Name: ' +
  personName +
  '</li>' +
  '<li>Age: ' +
  age +
  '</li>' +
  '<li>Job: ' +
  job +
  '</li>' +
  '<li>City2: ' +
  city +
  '</li>' +
  '</ul>';

function hello() {
  return 'hello';
}
// With template strings (es6)
html = `
  <ul>
  <li>Name: ${personName}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City3: ${city}</li>
  <li>${8 + 8}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
  `;

document.body.innerHTML = html;
