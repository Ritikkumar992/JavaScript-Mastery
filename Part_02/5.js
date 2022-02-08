console.log("Hello World");

let firstName = "Ritik";
let lastName = "Srivastava";

const myfun = function(){
    let var1 = "First Variable";
    let var2 = "Second Variable";
    console.log(var1);
    console.log(var2);
}

console.log(myfun);

/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope:  firsName, lastName, myfun.
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.
    ->   Code Execution Phase                                  Creation Phase(Global Memory)
    1. console.log(firstName)--> ERROR: can't access befrore initalize.    firstName : unitialized
    2. console.log(firstName)--> prints : Ritik                            firstName : 'Ritik

*/
