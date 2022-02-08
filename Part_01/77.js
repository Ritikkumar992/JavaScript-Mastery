// OOPS in JS::: VVI

// const user1 = {
//     name:'ritik',
//     age:19,
//     email:'rk@gmail.com',
//     addres:'malighat murli manohar colony ',
//     about:function(){
//         return `${this.name} is ${this.age} years old`;
//     },
//     is_18:function(){
//         return age >= 18;
//     }
// };

// const aboutUser = user1.about();
// console.log(aboutUser);

console.log('-----------------');

// what if we have a large no of users:
// if we follo the above methods it becomes tds for us:

//function(that function return object.)
//2. add key value pair.
//3. object ko return krega.

function createUser(firstname, age,email,address){
    const user =  {};
    user.firstname = firstname;
    user.age = age;
    user.email = email;
    user.addres = address;
    user.about = function(){
        return `${this.firstname} is ${this.age} years old`;
    }
    user.is_18 = function(){
        return age >= 18;
    }
    return user; // returning user object.
}

const user1 = createUser('riitk',10,'rik@gmail.com','ach chock');
console.log(user1);

const user1_about = user1.about();
console.log(user1_about); //return the about section.

const user1_is18 = user1.is_18();
console.log(user1_is18); // return true/false.