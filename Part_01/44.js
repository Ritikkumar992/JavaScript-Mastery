// function in Js: set of command which run some specifice piece of code whenever it gets execurted.

//function declaration.


function say(){
    console.log("Hello JS:)");
}

// function call:
say();
say();


//function to add two no.

function add(a, b){
    return a+b;
}

const ans = add(11,6);
console.log(ans);

console.log('----------------');

//function to mult two no:
function mutliply(x,y){
    // console.log(x*y);
    return x*y;
}
// mutliply();
var mul = mutliply(11,3);
console.log(mul);

console.log('------------');

//function to check a no is odd or even:

function isCheck(a){
    // if(a%2 === 0){
    //     console.log(`${a} is even`);
    // }
    // else{
    //     console.log(`${a} is odd`);
    // }
    // one line do so.
    console.log(a%2 === 0);
}

isCheck(12);


// given a string return the first character.

function char(s){
    return s[0];
}
console.log(char("Ritik"));


console.log('------------');

// given an array and a target
// return the index where the target is present else return -1

function match(arr,target){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(match([1,2,3,4,5],3));