// const userMethod = { 
//     about : function(){
//         return `${this.firstname} is ${this.age} years old`;
//     },
//     is_18 : function(){
//         return this.age >= 18;
//     },
//     song:function(){
//         return `yo yo honey sing!!!!!`;
//     }
// }

function createUser(firstname, age,email,address){
    // const user =  {};
    // const user = Object.create(userMethod);
    const user = Object.create(createUser.prototype);
    user.firstname = firstname;
    user.age = age;
    user.email = email;
    user.addres = address;
    // user.about = userMethod.about;
    // user.is_18 = userMethod.is_18;

    return user; // returning user object.
}
//using prototyepe:
createUser.prototype.about = function(){
    return `${this.firstname} is ${this.age} years old`;
}
createUser.prototype.is_18 = function(){
    return this.age >= 18
}
createUser.prototype.song = function(){
    return `la la la ..`
}


const user1 = createUser('ritik',19,'rk@gmail.com','kolkata');
const user2 = createUser('ritik',19,'rk@gmail.com','kolkata');
const user3 = createUser('rupesh',9,'rk@gmail.com','kolkata');

console.log(user1);
console.log(user1.is_18());


console.log(user1.about());
console.log(user3.is_18());

console.log(user3.song()); // yo yo honey sing!!!!
