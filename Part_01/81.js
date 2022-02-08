// prototype in Js:

function hello(){
    console.log('Hello world');
}

hello();

// In js function === function + object.
// functions are treated as object as well..

//few property of function as object.
console.log(hello.name); // print the name of funciton.

// we can even add our own property 
hello.ownProperty = "unique one!!!!"
console.log(hello.ownProperty); // seems that we are dealing with some object.

//Only function provide prototype property.
console.log(hello.prototype); 
//prototype is an empty object where we can add key value pair.


hello.prototype.abc = 'abc';
hello.prototype.xyz = 'xyz';
hello.prototype.sing = function(){
    return 'tum he to ho!!!!!';
}

console.log(hello.prototype.sing());

