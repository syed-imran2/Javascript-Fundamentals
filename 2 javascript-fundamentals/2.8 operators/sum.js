"use strict";
let a = prompt("First Number", 1);
let b = prompt("Second Number", 2);
/*The default values given in the prompt fuction are of string value.
So they needed to be converted to the number type. Here I used the unary add to convert them to number type. */
alert(+a + +b); // 3