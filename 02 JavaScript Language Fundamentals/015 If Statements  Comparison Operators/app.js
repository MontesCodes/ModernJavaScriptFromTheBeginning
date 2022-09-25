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
