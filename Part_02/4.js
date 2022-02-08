// Does let and const are hoisted??

//Uncaught ReferenceError: Cannot access 'firstName' before initialization
console.log(firstName);
let firstName = "Ritik";
console.log(firstName);


console.log(firstName);
const firstName = "Ritik";
console.log(firstName);



// ReferenceError: lastName is not defined 
// since it is showing refernce error it means it must be hoisted in our global context.
console.log(lastName);
console.log(typeof lastName); //undefined.
let lastName = "Srivastava";






/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope:  firsName.
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.
    ->   Code Execution Phase                                  Creation Phase(Global Memory)
    1. console.log(firstName)--> ERROR: can't access befrore initalize.    firstName : unitialized
    2. console.log(firstName)--> prints : Ritik                            firstName : 'Ritik

*/


// What is Tempororal Dead Zone...
