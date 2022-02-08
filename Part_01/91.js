// Static method and static property:
// stactic methods are those methods which doesn't need object.
// it can be called without object.
// it is directly related to class.



class person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get full_name(){
        return `${this.firstname} ${this.lastname}`;
    }
    setName(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    set full_name(fullName){
        const [firstname,lastname] = fullName.split(" "); // "Ritik Srivastava" -> [Ritik, Srivastava]
        this.firstname = firstname;
        this.lastname = lastname;
    }

    //static method..
    static fun(){
        return `Static funtion is called `;
    }
    //static property.
    static desc = "static property";

}

const user1 = new person('Ritik','Srivastava');
console.log(user1);

//static funtion. --> note: here person is class and no object/instance is used.
console.log(person.fun()); 

console.log(person.desc); //accessing static property.


