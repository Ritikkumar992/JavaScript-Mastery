// methods
// function which are defined inside object: method.

// const person = {
//     name:'ritik kumar',
//     age:29,
//     about:function(){
//         //this wo object h jo es function ko call kr raha h.
//         // console.log(`Person name is ${name} and person age is ${age}`); ---> errror....
//         console.log(`Person name is ${this .name} and person age is ${this.age}`);
//         console.log(this); // it will print the whole person object.
//     }
// }

// // console.log(person);
// person.about();

//few more examples:

function personInfo(){
    console.log(`Person name is ${this .name} and person age is ${this.age}`);
}

const person1 = {
    name:'ritik',
    age:19,
    about:personInfo
}
const person2 = {
    name:'Ansh',
    age:29,
    about:personInfo
}
const person3 = {
    name:'Rupesh',
    age:18,
    about:personInfo
}

person1.about();
person2.about();
person3.about();


