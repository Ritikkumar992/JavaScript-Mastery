// Parameter Destructuring.

const person = {
    name:"Ritik",
    gender:"male",
    age:19
};

const callObj = (obj)=>{
    console.log(obj.name);
    console.log(obj.gender);
    console.log(obj.age);
    console.log(obj.address); // those detail which is not present it shows undefined.
}

callObj(person);
console.log('-------------');

//using destructuring ....

const callObj1 = ({name:n1, gender, age, address})=>{
    console.log(n1);
    console.log(gender);
    console.log(age);
    console.log(address); // those detail which is not present it shows undefined.
}
callObj1(person);
