'use strict';
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.6);
val = Math.ceil(3.4);
val = Math.floor(6.3);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(3, 44, 5, 2, 66, 7, 3, -2);
val = Math.max(3, 44, 5, 2, 66, 4, -3);
val = Math.random();

val = Math.random() * 30;
val = Math.floor(Math.random() * 30);

console.log(val);
