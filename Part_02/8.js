// clouser:-> 
//Before learning clouser : we need to know:
// Function can return functions.

function outerFunction(){
    function innerFunction(){
        console.log("Hello World:)");
    }
    return innerFunction;
}
const ans = outerFunction();
console.log(ans);
ans();




//ONE MORE EXAMPLE::::::::::--------------------------->>

function fullName(firstName,lastName){
    function printName(){
        console.log(firstName,lastName);
    }
    return printName;
}
const ans1 = fullName("ritik","kumar");
console.log(ans1);
ans1();



/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope: ans, fullName,printName
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.

    ->   Code Execution Phase                                  Creation Phase(Global Memory)

    1.                                                          this: {}
    #                                                           window: this
    #                                                           fullName: <-------(f)-------->
    #                                                           ans1 : uninitailized. 
    #.const ans=full..                                     ----> printName() , firstName + lastName

====>>    A brand new function execution context is creted for fullName(" "," ");

->          Code Execution Phase                                  Local Memory Creation.
*   1.function printName(){                                       arguments [..]-> array like obj
        console.log(firstName,lastName);
    }                                                     
*   2. return printName                                          firstName -> Ritik
*===> here it will return whole printName() function             lastName -> Kumar
*===> as well as firstName and LastName as CLOUSERS              printName -> <---(f)---->
*                                                                

====>>    A brand new function execution context is creted for ans1(" ");

->          Code Execution Phase                                  Local Memory Creation.
*   1.console.log(firstName, lastName)                            arguments [..]-> array like obj
*           ----> Ritik Kumar                                        
*                                                                firstName -> Ritik
*                                                                lastName -> Kumar
*                                                                printName -> <---(f)---->
*/