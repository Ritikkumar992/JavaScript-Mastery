// how to clone an array. 
//cloning an array means a brand new cloned array is created with differnt refernce.
//and if we change the value of parent array it won't affect the value of cloned array.

let arr1 = ["item1","item2"];
//differnt ways to clone:
// let arr2 = ["item1","item2"];
// let arr2 = arr1.slice(0); // performance wise this is best.
// let arr2 = [].concat(arr1);
//spead operator
// let arr2 = [...arr1];// but if we use it you are COOL!!!!

// if we wish to add some extra items to clone arr.
// let arr2 = arr1.slice(0).concat(["item3","item4"]);
// let arr2 = [].concat(arr1,["item3","item4"]);
// spread operator.
let arr2 = [...arr1,"item1","item2","item3"];
let arr3 = ["item4","item5","item6"];
let arr4 = [...arr1,...arr2,...arr3]; // it concat arr1,arr2,arr3
console.log(arr4);

console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);

console.log('--------------');

arr1.push("item3");

console.log(arr1); //O/p :['item1', 'item2', 'item3']
console.log(arr2); //o/p: ['item1', 'item2']