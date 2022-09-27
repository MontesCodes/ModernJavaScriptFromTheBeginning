'use strict';
const id = 100;
const id2 = 100;
const id3 = 100;

// Equal to
if (id == 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not Equal To
if (id != 101) {
  console.log('Correct');
} else {
  console.log('INCorrect');
}

// Equal to Value & Type
if (id === 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Not Equal to Value & Type
if (id !== 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// Test if undefined
if (typeof id2 !== 'undefined') {
  console.log(`The ID is ${id2}`);
} else {
  console.log('No ID');
}

// Greater or Less Than
if (id3 > 200) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

const color = 'red';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('Color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical Operators

const personName = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${personName} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${personName} is a teenager`);
} else {
  console.log(`${personName} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${personName} can not run in race`);
} else {
  console.log(`${personName} is registered for the race`);
}

// Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

// Without Braces
if (id === 100) console.log(`correct`);
else console.log(`Incorrect`);

if (id2 === 100) console.log(`correct`);
else console.log(`Incorrect`);
