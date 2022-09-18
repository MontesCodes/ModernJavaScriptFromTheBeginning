'use strict';
let val;

const today = new Date();
const birthday = new Date('9-10-1981 11:25:00');
let birthday1 = new Date('9-10-1981 11:25:00');
const birthday2 = new Date('9-10-1981 11:25:00');

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

console.log(birthday);

console.log(val);
