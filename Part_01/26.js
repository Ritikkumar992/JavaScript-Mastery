//Intro to Array in JS: Array is object in js;
// it is a refernce data type:

//in simple term: array is ordered collection of items;

let fruits = ["apple","mango","grapes"];
console.log(fruits.length); //gives the length of array.
console.log(fruits[2]);
console.log(fruits);

console.log(':)');

// printing array in manner which we do in c++ or java.
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//here a single array can contain multiple data types:

let mix = ["string",1,12.21,null, 0, undefined];
console.log(mix);

console.log('-------------- :) ---');

let arr = [1,2,3,4,5,6];
let obj = {}; //object literals:
console.log(typeof obj);
console.log(typeof arr);

//check an array is actually a array or not!!
console.log(Array.isArray(arr)); // true is our array is actually an arr.