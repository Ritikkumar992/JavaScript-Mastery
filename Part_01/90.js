//getters and setters in classes.

class person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    // full_name(){
    //     return `${this.firstname} ${this.lastname}`;
    // }

    // if we wish to create method to be called as property
    get full_name(){
        return `${this.firstname} ${this.lastname}`;
    }

    // if we wish to set Name ..
    setName(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    set full_name(fullName){
        const [firstname,lastname] = fullName.split(" "); // "Ritik Srivastava" -> [Ritik, Srivastava]
        this.firstname = firstname;
        this.lastname = lastname;
    }

}

const user1 = new person('Ritik','Srivastava');
console.log(user1);

// if we wish to call method as an object.
// console.log(user1.full_name());

// if we wish to call method as a property
console.log(user1.full_name);

console.log(user1.firstname);//Ritik
console.log(user1.lastname);//Srivastava


user1.setName('Rakesh','Gupta');

console.log(user1.firstname);//Rakesh
console.log(user1.lastname);//Gupta

// if we do so we don't need to use setter.
user1.firstname = "Rohit";
user1.lastname = "Raj";

console.log(user1.firstname);
console.log(user1.lastname);

//if we wish to change the full name.
user1.fullName = 'Priyansh kumar';
console.log(user1);
console.log(user1.fullName);
