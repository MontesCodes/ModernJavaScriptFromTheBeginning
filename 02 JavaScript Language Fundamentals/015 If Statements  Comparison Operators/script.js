'use strict';

const id = 100;

// // Equal TO
// if (id == 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // Not Equal TO
// if (id != 101) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // Equal TO Value & Type
// if (id === 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // Not Equal TO Value & Type
// if (id !== 100) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// if (id) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// //Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// greater or less than
// if (id <= 200) {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// IF Else

const color = 'red';

if (color === 'red') {
  console.log('Color is red');
} else if (color === 'blue') {
  console.log('color is blue');
} else {
  console.log('Color is not red or blue');
}

// Logical Operators

const name = 'Steve';
const age = 20;

if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'correct' : 'Incorrect');

// WITHOUT BRACES

if (id === 100) console.log('correct');
else console.log('Incorrect');
