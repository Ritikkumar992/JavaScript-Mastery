// iterables::
// jispe for of loop lga skte h use, iterables khte h.
// strings, array are iterables:

//string as: iterables.
const name = "Ritik";
for(let char of name){
    console.log(char);
}

// array as: iterables.
const arr = ['item1','item2','item3','item4'];
for(let i of arr){
    console.log(i);
}
// objects are not iterables:
// error: obj is not iterables.
// const obj = {
//     name: "ritik",
//     age: 19,
//     gendere:"male"
// }
// for(let j of obj){
//     console.log(j);
// }

// array like object:
// jispe hum length property lga ske.
// and jiska element hum index ke through access kr ske.
// ex -> string.

const first_name = 'Priyanshu';
console.log(first_name.length);
console.log(first_name[2]);