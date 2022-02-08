const user = {
    name:'ritik',
    age:19,
    about:function(){
        console.log(this.name, this.age);
    }
}

user.about(); // ritik 19

// don't do this ever!!!!!
const myfn = user.about;
myfn(); // undefined

const fun = user.about.bind(user);
fun(); // ritik 19