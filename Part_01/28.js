// Primitive vs Reference data Types:

// Primitive:
let num1 = 6;
let num2 = num1;

console.log(`The value of num1 is ${num1}`);
console.log(`The value of num2 is ${num2}`);

// here value of num1 gets increment but value of num2 can't change i.e number are primitive data type:
num1++;
console.log(':)');

console.log(`The value of num1 is ${num1}`);
console.log(`The value of num2 is ${num2}`);

console.log(':)');

//Reference data Types:

// note: in refernce data type we have refernce to the data type.
//here we have only one arr which containe the information of both the array
// we have two differnt refernce:
//TIme stamp: 3:15:00  ---> Important concept

let arr1 = ["item1","item2"];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);

// here value of arr1 and arr2 both gets changes: i.e array is a refernce data types:
arr1.push("item3");

console.log(arr1);
console.log(arr1);
