//Clouser Examples: 01.

function hello(x){
    const a = "varA";
    const b = "varB";

    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("args");
ans();



/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope: ans, a, b, hello()
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.

    ->   Code Execution Phase                                  Creation Phase(Global Memory)

    1.                                                          this: {}
    #                                                           window: this
    #                                                           hello(): <-------(f)-------->
    #                                                           ans1 : uninitailized.
    #                                            --> ans () have function(){console.log(a,b,x);} 
    #                                            -->           a, b, x;

====>>    A brand new function execution context is creted for hello("args");

->          Code Execution Phase                                  Local Memory Creation.
*                                                                  arguments [args]-> array like obj
*                                                                  x : args
*    1.const a = "varA";                                           a->uninitialized -> "varA"                                     
*    2.const b = "varB";                                           b->uninitialized -> "varB"
*    3. return function(){console.log(a,b,x);}                     <---(f)---->
*===> here it will return whole  function() as well as a,b,x.     

====>>    A brand new function execution context is creted for ans(" ");

->          Code Execution Phase                                  Local Memory Creation.
*   1.console.log(a,b,x)                                          arguments [..]-> array like obj
*           ----> varA, varB, args                                        
*/