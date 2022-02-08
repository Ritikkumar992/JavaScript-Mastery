// call --> apply ---> bind


function hello(){
    console.log('Hello world');
}

hello(); // Hello world
hello.call(); // Hello world


function about1 (hobby,favmusican){
    console.log(this.name, this.age,hobby, favmusican);
}

const user1 = {
    name: 'ritik',
    age: 19,
    about: function(hobby,favmusican){
        console.log(this.name, this.age,hobby, favmusican);
    }
}

const user2 = {
    name: 'ausyh',
    age: 29,
    about: function(hobby,favmusican){
        console.log(this.name, this.age,hobby, favmusican);
    }
}

user1.about();//ritik 19
user2.about();//ausyh 29

user1.about.call(); //undefined.
user1.about.call(user1); // ritik 19 undefinde undefind
user1.about.call(user1,"coding","kuch v"); // ritik 19
user1.about.call(user2); // ritik 19 undefined undefined
user1.about.call(user2,"coding","kuch v"); // ayush  29

about1.call(user1, 'singing','tum he ho');
about1.call(user2, 'singing','tum he ho');


// apply
about1.apply(user1, ['dancing','nagin-dance']);

//bind
// it return a function.. and the returned funciton is treateda as a normal function.
const bind = about1.bind(user1,"cricket","sachin");
bind();
