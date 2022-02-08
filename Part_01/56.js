// Important Array Methods:

//1. ForEach ===>> takes a function as a cal back function as an argument.

const number = [1,2,3,4,5];

function fn(num, index){
    console.log(`Number is ${num} and index is: ${index}`);
}
// noob way to doing things:
fn(number[0],0);
fn(number[1],1);
fn(number[2],2);
fn(number[3],3);
fn(number[4],4);

console.log("---------------------------");

// using simple for loop.
for(let i=0;i<number.length;i++){
    fn(number[i],i);
}

console.log("---------------------------");

//using forEach loop.
number.forEach(fn);

console.log("---------------------------");

// using forEach loop : direct with creating funcion outside.
number.forEach(function(num, index){
    console.log(`Number is ${num} and index is: ${index}`);
})

// few more examples::

const obj = [
    {name: "Ritik",age:19,gender:"male"},
    {name: "Chintu",age:16,gender:"male"},
    {name: "Mintu",age:17,gender:"male"}
]
console.log(typeof obj);
console.log(Array.isArray(obj));


for(let i of obj){
    console.log(i.name);
}

// using forEach loop;
obj.forEach(function(i){
    console.log(i.name);
    console.log(i.age);
    console.log(i.gender);
});

// using forEach loop with arrow function.
obj.forEach((i)=>{
    console.log(i.name);
});