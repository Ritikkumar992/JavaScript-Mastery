function myfun(pow){
    return function(number){
        return number ** pow;
    }
}
// const myfun = pow => number  => number ** pow; --> same as above myfun(...)

const square = myfun(2);
const ans = square(3);
console.log(ans);



/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope: square, myfun, ans
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.

    ->   Code Execution Phase                                  Creation Phase(Global Memory)

    1.                                                          this: {}
    #                                                           window: this
    #                                                           myfun(): <-------(f)-------->
    #                                                           squre: uninitailized.
    #                         ----> function(number){num**pow} + power(2)
    #                                                           ans : uninitailized -> 9
    # console.log(ans) == 9                                    

====>>    A brand new function execution context is creted for myfun(2);

->          Code Execution Phase                                  Local Memory Creation.
*                                                                  arguments [2]-> array like obj
*                                                                  power: 2                                           
*                                                                  <---(f)---->.     

====>>    A brand new function execution context is creted for square(" ");

->          Code Execution Phase                                  Local Memory Creation.
*   1.cont ans = square (3)                                        arguments [..]-> array like obj
*           ----> 3 ** 2                                        
*/