export default class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

export  class Person2{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info(){
        console.log(this.firstName,this.lastName,this.age);
    }
}

// export{Person};