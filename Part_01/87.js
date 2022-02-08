// Practise on Classes :

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

const animal1 = new Animal('Dog',1);
console.log(animal1);
console.log(animal1.name);
console.log(animal1.age);
console.log(animal1.isCute());
console.log(animal1.isSuperCute());

console.log(animal1.isEating());



//making a cat class.

class cat {
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

const tommy = new cat('tommy',1);
console.log(tommy);
console.log(tommy.name);
console.log(tommy.age);
console.log(tommy.isCute());
console.log(tommy.isSuperCute());

console.log(tommy.isEating());




// we are doing the same stuff again and again 
// so we introduce the concept of Inheritace.
//In inheritance : child class acquire the property of parent class.


class dog extends Animal{
// dog class extends all the property of Animal class.
}

const vivo = new dog('vivo',5);
console.log(vivo);
console.log(vivo.isCute());
console.log(vivo.isEating());