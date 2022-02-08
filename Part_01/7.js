//String methods:

//trim()
//toUpperCase()
//toLowerCase()
//Slice()

//trim() ---->>

let string = "Ritik";
console.log(string);
console.log(string.length);
// string.trim();// since strings are immutable so it doesn't make any impact :
// we need to declare a new string or change the given string to fell the impact.
string = string.trim(); 

//toUpperCase() ---->>  convert string to uppecase.
string = string.toUpperCase();

//toLowerCase() ---->>  convert string to lowerCase.
string = string.toLowerCase();

console.log(string);
console.log(string.length);
//slice(start index, end index) ----->> end index is not inclusive.
let newName = "Ayush";
// newName = newName.slice(1,4); // prints yus 
newName = newName.slice(1); // slice element from the 1st index to the end.
console.log(newName);

