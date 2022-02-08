// Block scope and function funciton.

//let and const are block scope,
// var is funciton scope.

if(true){
    let firstName = "Ritik";
    console.log(firstName);
}
// console.log(firstName); // can't access let outside the block.

if(true){
    const firstName = "Babul";
    console.log(firstName);
}
// console.log(firstName); // can't access let outside the block.

//Note; here both firstNam are two differnt variable because they are defined in two differnt block.

console.log('-----------------');

// since var is not a block scope variable so it can be acccessed from outside the block also.
if(true){
    var firstName = "Kartik";
    console.log(firstName);
}
console.log(firstName);

console.log('-----------------');

// var is function scoep:::

const fun = () =>{
    var firstNam = "Aryan";
    console.log(firstNam);
}
fun();
// console.log(firstNam); --> can't access var since var is funtion scope , it can't be access outside the class.

console.log('-----------------------');

//few more examples:

const fun1 = () => {
    var value = "value3"
    if(true){
        var value = "value1";
        console.log(value);
    }
    if(true){
        var value = "value2";
        console.log(value);
    }
    console.log(value);
}
fun1();