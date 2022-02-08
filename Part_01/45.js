// function in Js: set of command which run some specifice piece of code whenever it gets execurted.

//function Experresion: when we declare a function to a variable.


const say = function(){
    console.log("Hello JS:)");
}
say();
say();


//function to add two no.
const ans = function(a,b){
    return a+b;
}
console.log(ans(1,2));

console.log('----------------');

//function to mult two no:

const multiply = function(a,b){
    return a*b;
}
console.log(multiply(12,23));

console.log('------------');

//function to check a no is odd or even:

const isCheck = function(a){
    console.log(a%2 === 0);
}

isCheck(121);


// given a string return the first character.

const char = function (s){
    return s[0];
}
console.log(char("Ritik"));

console.log('------------');

// given an array and a target
// return the index where the target is present else return -1


const match = function(arr,target){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(match([1,2,3,4,5],3));
