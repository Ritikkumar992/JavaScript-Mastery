// This is what we use generally
let arr = [1,2,3,4,5];
console.log(arr);

//This is how array is created internally.
let arr1 = new Array(1,2,3,4,5,6);
console.log(arr1);
// all those properties of array we get from [[prototype]]
console.log(Array.prototype);

// What we observe here that prototype of arr is an array.


function hello(){
    console.log('hello world');
}
//But prototype is empty object: {}
console.log(hello.prototype); 

//we can also modify the type of our prototype.
hello.prototype = [];
console.log(hello.prototype);

hello.prototype.push("1");
console.log(hello.prototype);

