// Undefined .
// null 

let firstName; // ---> undefined.
console.log(firstName, typeof firstName);

firstName = "riitk";
console.log(typeof firstName, firstName);

// const first_Name; // const must be declared.
// console.log(typeof first_Name);

//null
//Note: there's a bug in Js : typeof null should be null but due to bug it shows object.
let first_name = null;
console.log(first_name, typeof first_name);

const a = null;
console.log(a,typeof a); 

// BIGINt:

let b = 121111111231;
console.log(b);

console.log('-----------------------------');

console.log(Number.MAX_SAFE_INTEGER); // max integer value.
console.log(Number.MIN_SAFE_INTEGER); // min integer value.

console.log('-----------------------------');

let c = BigInt(12); // o/p: 12n
let d  = 23n;  // another way to declare BigInt
console.log(c+d);