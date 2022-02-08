// arrow function:


const say = () => {
    console.log("Hello JS:)");
}
say();
say();


//function to add two no.
const ans = (a,b) => {
    return a+b;
}
console.log(ans(1,2));

console.log('----------------');

//function to mult two no:

// const multiply = (a,b) => a*b;

const multiply = (a,b) => {
    return a*b;
}

console.log(multiply(12,123));

console.log('------------');

//function to check a no is odd or even:

const isCheck = (a) => {
    console.log(a%2 === 0);
}

isCheck(121);


// given a string return the first character.

const char = (s) => {
    return s[0];
}
console.log(char("Ritik"));

console.log('------------');

// given an array and a target
// return the index where the target is present else return -1

const match = (arr,target) => {
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
console.log(match([1,2,3,34,5],5));
