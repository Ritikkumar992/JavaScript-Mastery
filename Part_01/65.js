// Important Array Methods:

// splice method:: used to inset and delete item in the array

// start      no of items whichh we want to delete           insert

const myArr = ['item1','item2','item3'];

// delete : start from index 1 and delete one item.
// delete : delete as well as return the deleted_item in array

myArr.splice(1,1);
const deleted_item = myArr.splice(1,1);
console.log(deleted_item);

console.log(myArr);

// insert :  start from index 1 , delete 0 item and 'inserted_item'

myArr.splice(1,0,'inserted_item');
console.log(myArr);


// both: delete and insert..

myArr.splice(1,2,"inserte_item1","inserted_item2");
console.log(myArr);

const deletedArr = myArr.splice(1,2,"inserte_item1","inserted_item2");
console.log(deletedArr); // gives the items which got deleted from the array.

