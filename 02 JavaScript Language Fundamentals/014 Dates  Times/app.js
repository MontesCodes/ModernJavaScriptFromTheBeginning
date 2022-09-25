'use strict';
let val;

const today = new Date();
const birthday = new Date('9-10-1981 11:25:00');
let birthday1 = new Date('September 10 1981');
const birthday2 = new Date('9/10/1981');

val = today;
val = today.getMonth();
val = today.getFullYear;
val = today.getDay;
val = today.getHours;
val = today.getDate;
val = today.getMinutes;
val = today.getMilliseconds;
val = today.getSeconds;
val = today.getTime;

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(33);
birthday.setSeconds(27);
birthday1.setMonth(3);
birthday2.setFullYear(1977);

console.log(birthday);
console.log(birthday1);
console.log(birthday2);

console.log(val);
console.log(typeof val);
