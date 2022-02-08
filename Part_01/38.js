// how to iterate in object.
//method 1: using for in loop.
//method 2: using object.key.

const person = {
    name:"Ritik",
    age:19,
    "person hobies":["singing","dancing","sleeping"]
}

//for in loop.
for(let i in person){
    // console.log(i); // it will prints all the indexes.
    // console.log(person[i]); // it will prints all the key.
    console.log(`${i} : ${person[i]}`); // it will prints all the key value pair.
}
console.log('-------------------');

// using Object.key
//Object.keys gives us array of keys.
// console.log(Object.keys(person));
// let cnt = Object.keys(person);
// console.log(Array.isArray(cnt)); // return true if cnt is array

for(let key of Object.keys(person)){
    console.log(person[key]); // prints all the items.
}

