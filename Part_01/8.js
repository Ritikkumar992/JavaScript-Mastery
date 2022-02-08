// Types of operators;

//Types of data TYPES in JS:
//string "ritik"
//number 1, 12.0, --> it doesn't have int, double, long int, long double.
//booleans true/false.
//undefined.
//null
//BigInt
//symbol.

let s = "ritik";
let a = 12.2123;
let b = false;
console.log(typeof s);
console.log(typeof a);
console.log(typeof b);

console.log('----------------------');

//convert number to string.
// a = String(a);
a = a+""; //simple trick to do so.
console.log(typeof a);

console.log('-----------------------');

//convert string to number.
a = Number(a);
a = +a; //simple trick to do so.
console.log(typeof a);

