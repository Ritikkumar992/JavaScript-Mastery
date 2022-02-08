// Lexicl Scope and Scope Chain

const lastName = "Kumar";

const printName = function(){
    const firstName = "Ritik";
    console.log(firstName);
    console.log(lastName);
}

printName();


/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope: lastName, printName
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.

    ->   Code Execution Phase                                  Creation Phase(Global Memory)

    1.                                                    lastName ->undefined -> kumar
    1. printName();                                      printName-> undefined ->  <----(fn)---->
    3.  ----->>  prints Arguments.                       firstName ->undefined -> Ritik
    4.  ----->> console.log(firstName); -> Ritik
    4.  ----->> console.log(lastName); ->  Kumar
    # Since lastName is not defined in the loca scope i.e printName function so
    # according to the property of lexical scope it searches for lastNam in the Globla Scope.

*/