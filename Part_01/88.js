//super keyword 

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
}
//if we wish to add some more feature to or child class.
const dog1 = new dog('Tommy',5,50);
console.log(dog1);
console.log(dog1.run());

