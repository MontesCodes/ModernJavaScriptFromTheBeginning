'use strict';
const firstName = 'William';
const lastName = 'Johnson';
const age = 38;
const str = 'Hello there I am whom you think that I am';
const tags = 'Web Design, Web Development, programming';

let val;

val = firstName + lastName;

// Concatenation

val = firstName + ' ' + lastName;

// Append
val = 'Montes ';
val += 'Codes';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = "that's awesome, I can't wait";

// Length
val = firstName.length;

// Concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('1');
val = firstName.lastIndexOf('1');

// charAt()
val = firstName.charAt('2');
//Get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//  slice()
val = firstName.slice(-3);

// split
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Montes', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);
