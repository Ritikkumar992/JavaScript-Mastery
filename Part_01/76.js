const user = {
    name:'ritik',
    age:19,
    about:()=>{
        console.log(this.name, this.age);
    }
}
user.about(user); // undefined

// same as above
const user = {
    name:'ritik',
    age:19,
    about(){
        console.log(this.name, this.age);
    }
}
user.about(); // undefined