//function execution context.

let foo = "foo";
console.log(foo);

function getfullName(firstName, lastName){
    console.log(arguments);
    let myvar = 'var inside function';
    console.log(myvar);
    let fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getfullName('Ritik','Kumar');
console.log(personName);


/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope:  foo, getfullName, personName.
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.

    ->   Code Execution Phase                                  Creation Phase(Global Memory)

    1. console.log(foo)-->  prints foo (2)                              foo : foo (1)
    2. console.log(personName)                                          getfullName: <----(fn)---->
    3.  ----->>  prints Arguments.
    4.  ----->> var inside function
    5.  ----->> Ritik Kumar

====>>    A brand new function execution context is creted.

->          Code Execution Phase                                  Local Memory Creation.
*    1. console.log(arguments)-> prints arguments()                 arguments [....]-> array like object.
*    2. console.log(arguments)                                      firstName -> unitialized.
*    3. console.log(arguments)                                      lastName -> unitialized.
*    3. console.log(arguments)                                      myvar = 'var inside function';
*    3. console.log(arguments)                                      fullName = Ritik Kumar.

*/