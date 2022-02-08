// same method in child class.
// if child class and parent class have same method then child class method gets the preference.


class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    isEating(){
        return `${this.name} is eating`;
    }
    isCute(){
        return this.age>=2;
    }
    isSuperCute(){
        return this.age === 1;
    }
}

class dog extends Animal{
    //if we wish to add some more feature to or child class.
    constructor(name,age,speed){
        super(name,age);// inheriting the constructor of parent class.
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at ${this.speed} km/h`;
    }
    // isEatng() method is same as parent isEating method but still child's method gets prefernce.
    isEating(){
        return `${this.name} is eating Chicken`;
    }
}

//if we wish to add some more feature to or child class.

const dog1 = new dog('Tommy',5,50);// those class gets prefernce whose object is called
console.log(dog1);
console.log(dog1.run());
console.log(dog1.isEating());


const dog1 = new Animal('Tommy',5,50);// those class gets prefernce whose object is called
console.log(dog1);
console.log(dog1.run());
console.log(dog1.isEating());
