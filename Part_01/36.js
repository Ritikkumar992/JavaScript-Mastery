//Objec in Js: it is a refernce data types;
// array is not sufficient to in real life so we use object.

//Object store key value pair.
//it do not have any index.

let obj = {name:"Ritik",age:19};

console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log('--------------');

let person = {
    name :"Ritik Kumar",
    age: 19,
    gender:"Male",
    Roll_no:27600120035,
    language: ["C++","C","Java","Javascript"]
}
// modifying our obj
person.address = "Malighat murli mahonar colony muzaffarpur ";
// ways to access the object:
// method 1: using dot operator method 2 using squrare brcket [" "]
console.log(`The age of person is ${person.age}`);
console.log(`The age of person is ${person["age"]}`);
console.log(`The language person is ${person.language}`);
console.log(`The language person is ${person.language[1]}`);
console.log(`The language person is ${person.language[3]}`);

console.log(person.address);
console.log(person["address"]);
// console.log(person[address]); // throws error


console.log('--------');
console.log(person);