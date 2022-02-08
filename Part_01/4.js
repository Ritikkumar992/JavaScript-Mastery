//let keyword:
//it is preferd to use let keyword as it is introduced in ES2015.

// it doesn't throw error.
var a = 10;
var a = 2;
console.log(a**2); // 2 to the pow 2.
console.log(a**3); //2 to the pow 3
console.log(a**0.5); // square root of 2.

// but if we use this let.
let cnt = 10;
// let cnt = 20; --> error: cnt is already declared.
console.log(cnt);

// Major differnce btw let and var is:
//block scope vs function scope (late we will cover it...)