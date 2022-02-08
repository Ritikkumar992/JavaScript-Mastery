console.log(myfun); // undefind 

//function declaration.

var myfun = function(){
    console.log('This is my fun');
}

console.log(myfun); // whole function is printed.


/**
 * 1. Compilation Phase
 * 1.1 ----> Eearly Error Checking.
 * 1.2 ===> Global Scope:  myfun.
 
  * 2. Code Execution Phase.

  * 2.1 =====>>                    Global Execution Context.
    ->   Code Execution Phase                           Creation Phase(Global Memory)
    1. console.log(myfun)   ------> undefined printed               myfun : undefined.
    2. console.log(myfun) ---->   whole function get prited         myfun : <------(f)------>

*/