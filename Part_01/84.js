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

for(let key in user1){
    // console.log(key); // it will print all keys
    
    // but what if we wish to print only non-prototypal keys>
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}
