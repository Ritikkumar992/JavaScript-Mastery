// Differnce between dot and square bracket.

const person = {
    name:"Ritik",
    age:19,
    // hobies:["singing","dancing","sleeping"]
    "person hobies":["singing","dancing","sleeping"]
}

console.log(person.name);
// console.log(person.hobies); ---> throws error.
console.log(person["person hobies"]); // correct way to use spaceous word

//if we wish to add our new key as email then:
const key = "email";

person[key] = "riitk151112@gmail.com"; // email: ritik151112@gmail.com
person["key"] = "riitk151112@gmail.com"; // key: ritik151112@gmail.com

console.log(person);
