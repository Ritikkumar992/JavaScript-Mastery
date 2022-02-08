// Important Array Methods:

// fill method:: 

// if we wish to create the whole arr which is initailize with specific value:

//               length(10)   default value(-1)
const myarr = new Array(10).fill(-1);
console.log(myarr); 

// if we wish to change a already existing array.

const arr = [1,2,3,4,5,6,7,8,9];

//value(0)  start(2)  end(5)
arr.fill(0,2,5); // note : start is inclusive while end is not inclusive.
console.log(arr);

