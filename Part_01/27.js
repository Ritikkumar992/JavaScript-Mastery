// Array methods:

let arr = ["mango","apple","guava"];
console.log(arr);
console.log('------------------');

//Push operation ===> add items at the end of the array.
arr.push("lichi");
console.log(arr);
console.log('---------------------');

// we can also push multiple items at once.
arr.push("grapes",1,null,undefined,0);
console.log(arr);
console.log('---------------------');


//Pop operation ===> remove and return items from  the end of the array.

let lastRemove = arr.pop(); // removes and return last item;
console.log(lastRemove);
console.log(`last remove item is ${lastRemove}`);


//Unshift operation ===> add  items at   the start of the array.

arr.unshift("PineApple");
console.log(arr);
console.log('---------------------');

// similar to push we can add multiple items also at the start.
arr.unshift("StrawBerry",1,null, undefined, 0);
console.log(arr);

//shift operation ===> remove and return items form the start of the array.

let firstRemove = arr.shift();
console.log(arr);
console.log(`First remove item is : ${firstRemove}`);


//Note : push and pop are fast as compared to unshift and shfit bcz in unshift and shift 
//we need to shift all the items's positon which affect our memory optimzation proccess