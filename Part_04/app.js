// const firstName = 'Ritik'
// const age = 19;

// now we wish to import code form age.js and fname.js

import{firstName} from './utils/fname.js';
import{age} from './utils/age.js';
// import{Person} from './utils/person.js';

// if we use export default we don't need for {} 
// One file can only have one export default:
// import Person from './utils/person.js'; 

// multiple file import
import Person,{Person2} from './utils/person.js'; 

console.log(firstName,age)

const person = new Person("Ritik","Srivastava",19);
person.info();

const person2 = new Person("Jon","the don",9);
person2.info();
