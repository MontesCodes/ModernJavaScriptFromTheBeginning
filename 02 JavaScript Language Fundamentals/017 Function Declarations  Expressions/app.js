'use strict';
// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  /* if (typeof firstName === ' undefined') {
    firstName = 'John';
  }
  if (typeof lastName === ' undefined') {
    lastName = 'Doe';
  } */
  // console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log(greet('Steve', 'Smith'));

// FUNCTION EXPRESIONS

const square = function (x = 3) {
  return x * x;
};

// console.log(square());

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS -IIFEs

/* (function () {
  console.log('IIFE ran...');
})(); */

// (function (name1) {
//   console.log('Hello ' + name1);
// })('Montes');

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo..');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
