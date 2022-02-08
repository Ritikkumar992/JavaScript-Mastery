//Classes in JS:
// Classes are fake in js; 
// internally they are implementing the same  logic as well discuss in 84.js

class createUser {
    //constructor declared.
    constructor(firstname, age, email, address) {
        this.firstname = firstname;
        this.age = age;
        this.email = email;
        this.addres = address;
    }
    //methods are declared here.
    about(){
        return `${this.firstname} is ${this.age} years old`;
    }
    is_18(){
        return this.age >= 18;
    }
    song(){
        return `la la la ..`;
    }
    add(a,b){
        return a+b;
    }
}


const user1 = new createUser('ritik',19,'rk@gmail.com','kolkata');
const user2 = new createUser('ritik',19,'rk@gmail.com','kolkata');
const user3 = new createUser('rupesh',9,'rk@gmail.com','kolkata');

console.log(user1);
console.log(user1.firstname);
console.log(user1.about());
console.log(user1.is_18());
console.log(user1.song());
console.log(user1.add('ritik ','kumar'));


