// __proto__ and [[prototype]] and prototype.

const obj1 = {
    key1:'value1',
    key2:'value2'
}

// const obj2 = {
//     key3:'value3'
// }

// console.log(obj2.key3); // it simply print 'value3'

// console.log(obj2.key1); // it prints undefined since key1 is not defined in obj2

//but if we wish to access key1 ---> what will we do ??
// target: print obj2.key1 if key1 is present in obj2 then print it else
// search key1 in obj1 and if it is present in obj1 print it else print undefined.


// one way to initialize an object with empty value.

// const obj2 = {};
// obj2.key3 = 'value3';


//one more way to initialize an object with empty value.

const obj2 = Object.create(obj1);// here proto property gets set to our obj2.
obj2.key3 = 'value3';

console.log(obj2.key1); // --> value1

console.log(obj2);
// it wil print 
// [[Prototype]]: Object
// key1: "value1"
// key2: "value2"

// __proto__ and [[prototype]] --> same.

console.log(obj2.__proto__);
//it will print the prototype value. i.e  key1: 'value' and key2:'value2'

