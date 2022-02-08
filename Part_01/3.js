// Rules for declaring a variable:

//Variable name can't start with number.
// var 1val = 10; ---> invalid.
var val1 = 10; // ---> valid.
console.log(val1);

//We can only use underscore or dollar sign if we consider special character.
//below all are valid:
var  firstName = "Ayush"; // camel case writing.
var first_name = "ritik"; // snake case writing.
var _firstname = "rohit";
var _first_name = "kumar";

console.log(first_name);
console.log(_firstname);
console.log(_first_name);

var $cnt = 10;
var cnt$ = 100;

console.log($cnt);
console.log(cnt$);


//We can't use spaces:
// var last name = "shriavastav"; --> invalid.

//convenction:
//it is prefered to start the var name with small letter and use camel case.