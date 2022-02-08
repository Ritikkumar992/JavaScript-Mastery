// Important Array Methods:

//1. map method ===>> always return a new array .i.e it always return not console

const number = [3,4,5,6,1];

function callback(num){
    return (num*num);
}
//using call back function inside the map.
const res = number.map(callback);
console.log(res);

//creting a new function in the map.
const res1 = number.map(function(num){
    // console.log(num*num);
    return num*num;
})

console.log(res1);


//creating arrow function inside the map.

const res2 = number.map((num) => num**3);
console.log(res2);



// few more example.

const obj = [
    {name: "Ritik",age:19,gender:"male"},
    {name: "Chintu",age:16,gender:"male"},
    {name: "Mintu",age:17,gender:"male"}
]

const res3 = obj.map((index) => index.name);

console.log(res3);

const person = obj.map(function(i){
    return `${i.name}, ${i.age},${i.gender}`;
})
console.log(person);