// Hoisting in JS:: we will cover it latere

// if we do so ... error: can't access say befor einitializaton.
// say();
// const say = () =>{
//     console.log("Hello World");
// }

//rror: can't access say befor einitializaton.
// say()
// const say = function(){
//     console.log("Hello World:)");
// }
// say();


// But we can do so in function declaration..

// if we do so ... ??????? SURPRSISING RESULT::
say();
function say(){
    console.log("Hello World");
}
say();
