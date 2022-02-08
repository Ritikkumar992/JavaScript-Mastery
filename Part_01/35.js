// Array Destructuring

const arr = ["item1","item2","item3","item4"];
// let arr1 = arr[0];
// let arr2 = arr[1];

// console.log(arr1);
// console.log(arr2);
// console.log('---------------');

// using array destructuring.
// let [arr1, arr2] = arr;
// console.log(arr1);
// console.log(arr2);
// console.log('---------------');

//
// let [arr1,, arr2] = arr;
let [arr1,arr2 ,...mynewarr] = arr;

console.log(arr1); //item1
console.log(arr2);//item2
console.log(mynewarr);//prints rest of the array
console.log('---------------');