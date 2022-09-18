'use strict';
// FOR LOOP

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('2 is my favorite number');
    continue;
  }
  if (i === 5) {
    console.log('Stop the loop');
    break;
  }

  console.log('For Loop Number ' + i);
}

// WHILE LOOP

let u = 0;

while (u <= 10) {
  console.log('While loop Number ' + u);
  u++;
}

// DO WHILE

let i = 0;

do {
  console.log('Do Loop Number ' + i);
  i++;
} while (i <= 6);

// Array while/Do/For loops

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// For Each
cars.forEach(function (car, index, array) {
  console.log(car);
  console.log(`${index} : ${car}`);
  console.log(array);
});

// Map

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'karen' },
  { id: 4, name: 'Run' },
];

const ids = users.map(function () {
  return users.id;
});

console.log(ids);

// For in Loop
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
};

for (let x in user) {
  console.log(x);
  console.log(`${x} : ${user[x]}`);
}
