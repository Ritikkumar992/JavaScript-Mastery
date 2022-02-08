// Arrow function...
// this keyword is not defined in arrow function.

const user = {
    name:'ritik',
    age:19,
    about:()=>{
        console.log(this.name, this.age);
    }
}
user.about(user); // undefined