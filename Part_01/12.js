//bolleans  and comparision Operator.

let num1 = 12;
let num2 = 23;

console.log(num1>num2); //return true if num1>num2;
console.log(num1>=num2); //return true if num1>=num2;
console.log(num1<num2); //return true if num1<num2;
console.log(num1<=num2); //return true if num1<=num2;

console.log('------------------------');
// == and ===

// Note: == (double equal to ) --> only checks values doesn't care about data types
// Note: === (triple equal to ) --> checks values as well as data types

let a = 7;
let b = 7;
let c = "7"
console.log(a == b);//true
console.log(a === b);//true
console.log(a == c);//true but it should be false bcz a and c have differnet data types;
console.log(a === c);//false

console.log("--------------------:)-----------");

// != and !==

// note: != return true if both have different values.
// note: != return false if both have same values.

// note: !== return true if both have different values as well as data types.
// note: !== return false if both have same values as well as data types.
let d = 8;
let e = "8";
let f = 18;

console.log(d != e); // return false;
console.log(d != f); // return false;

console.log(d !== e); //true;
console.log(d !== f); //true; 