//get multiple elements by using getElments by class name.

const navItem = document.getElementsByClassName("nav-item"); //HTML Collections.
console.log(navItem);
console.log(navItem[1]);
console.log(navItem[2]);
console.log(typeof navItem); //object
console.log(Array.isArray(navItem));//false

//get multiple elements items using querySelectorAll.


const navItem = document.querySelectorAll("nav-item");// NodeList
console.log(navItem);
// console.log(navItem[1]); // we can't access it like an array.
// console.log(navItem[2]);
console.log(typeof navItem); //object
console.log(Array.isArray(navItem));//false