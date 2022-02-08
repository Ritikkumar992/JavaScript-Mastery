const userMethod = { 
    about : function(){
        return `${this.firstname} is ${this.age} years old`;
    },
    is_18 : function(){
        return age >= 18;
    }
}

function createUser(firstname, age,email,address){
    const user =  {};
    user.firstname = firstname;
    user.age = age;
    user.email = email;
    user.addres = address;
    user.about = userMethod.about;
    user.is_18 = userMethod.is_18;

    return user; // returning user object.
}

const user1 = createUser('ritik',19,'rk@gmail.com','kolkata');
const user2 = createUser('ritik',19,'rk@gmail.com','kolkata');
const user3 = createUser('rupesh',19,'rk@gmail.com','kolkata');

console.log(user1.about());
console.log(user3.about());