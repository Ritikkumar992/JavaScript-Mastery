//Compilation 
/*
1.Js first compily the code 
2.Code execute.

--> Compilation phase:
1.Tokezing/ Lexing --> code gets broken down into smaller tokens.
2.Parsing ----> tokenise codes gets converted to Abstract Syntax Tree.

3.Code Execution --> finally our code gets executed.

## Ecma Script doesn't tell about the compilation of the js code:

// But it focus on the :
1.Early Error Checking. ----> syntax error, ....etc

2.Determining Appropriate Scope for Variables.
   ----> its already been decided by js about the scope of the variable.
   ----> knosa variable ka kitna scope h.

############# Compilation Phase ################
==========> Early Erro Checking.
==========> Determining Apporpriate Scope for Variables.


############## Code Execution Phase #############
-----> In Js code executes inside the execution context.
-----> Firstly Global Execution Context is being creted.


====> Global Execution Context.
-----> 1. Creation Phase.
----->2. Code Execution Phase.



=====>>                    Global Execution Context.
    ->   Code Execution Phase                         Creation Phase(Global Memory)
    1. console.log(this) --> this get printed             winow :    {}
    2. console.log(window) ---> window get prited         this  = window
    3. console.log(fistName)--> undefined pritned         firstName : undefined. --> Ritik
    4. console.log(fistName)--> Ritik gets prited         firstName : undefined. --> Ritik


#### NOTE:: --> JS is synchronous single thread programming language.
----------> it means code gets executed line by line if first line gets fully executed then
----------> and only then code gets moved to next line.



# Conclusion = Compilation -> Code Execution.
*/

//How compilation Works?
//Why Complily?

//How javaScript code execution works?

console.log(this);
console.log(window);
console.log(firstName);
var firstName ='Ritik';
console.log(firstName);