//new Keyword..

//create empty this = {}
// return this.
// new keyword is equivalent to Object.create(createUser.prototype)

function createUser(name,age){
    this.name = name;
    this.age = age;
}

//adding prototype value.
createUser.prototype.about = function(){
    console.log(this.name, this.age);
}

const user11 = new createUser('ritik',19);
user11.about();




console.log('-------------------');




//few more example of new keyword.
//if we use new keyword try to use function name starting with Capital letter.



function CreateUser(firstname, age,email,address){
    // const user =  {};
    // const user = Object.create(userMethod);
    // const user = Object.create(createUser.prototype);
    this.firstname = firstname;
    this.age = age;
    this.email = email;
    this.addres = address;
    // user.about = userMethod.about;
    // user.is_18 = userMethod.is_18;

    // return user; // returning user object.
    // return this;
}
//using prototyepe:
CreateUser.prototype.about = function(){
    return `${this.firstname} is ${this.age} years old`;
}
CreateUser.prototype.is_18 = function(){
    return this.age >= 18
}
CreateUser.prototype.song = function(){
    return `la la la ..`
}

//new keyword is used here..

const user1 = new CreateUser('ritik',19,'rk@gmail.com','kolkata');
const user2 = new CreateUser('ritik',19,'rk@gmail.com','kolkata');
const user3 = new CreateUser('rupesh',9,'rk@gmail.com','kolkata');

console.log(user1);
console.log(user1.is_18());
