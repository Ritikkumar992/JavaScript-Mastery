// use of const instead of let while using array.
// it is prefered to use const instead of let while using refernce data type.

const arr =["item1","item2","item3"];
// arr = ["item5","item6"]; ---> error: can't reasign to the const variable.

//here we can push to our const arr since actually we are not doing anuthing to the refernce pointer.
arr.push("item4");// 0x11 

console.log(arr);