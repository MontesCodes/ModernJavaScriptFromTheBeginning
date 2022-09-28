'use strict';
// FUNCTION DECLARATIONS

function greet(firstName, lastName) {
  if (typeof firstName === ' undefined') {
    firstName = 'John';
  }
  if (typeof lastName === ' undefined') {
    lastName = 'Doe';
  }
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Smith'));
