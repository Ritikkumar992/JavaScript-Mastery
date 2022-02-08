// Practising the concept which we learn in 1.js

console.log(this);
console.log(window);
console.log(myfun);
myfun();
console.log(fullName);


function myfun() {
    console.log('This is my function');
}

var firstName = "Ritik";
var lastName = "Srivastava";
var fullName = firstName + " " + lastName;

console.log(fullName);



/**
 * 1. Compilation Phase
 * 1.1----> Eearly Error Checking.
 * 1.2===> Global Scope: firstName, lastName, fullName, myfun.
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.
    ->   Code Execution Phase                           Creation Phase(Global Memory)
    1. console.log(this)   ------> this get printed          winow :    {}
    2. console.log(window) ---->   window get prited         this  = window
    3. console.log(myfun)  ----->  myfun gets pritned        firstName : undefined
    4. myfun()             ----->  This is my function
    5. console.log(fullName) ----> undefind gets printed     lastName : undefined
    6. console.log(fullName) ----> Ritik Kumar               fullName : undefined -> Ritik Kumar
>                                                             myfun : <-----(fun)---->

*/