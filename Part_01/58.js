// Important Array Methods:

//1. filter method ===>> used to filter array:
// the call back function of filter method always return a boolean value.
// it also forms a new array but only when conditon is true..

const number = [1,3,5,2,7,6,8];

// all even no are filtered out>

const isEven = (n) => {
    return n%2 === 0;
}

// const EvenNumber = number.filter(isEven);
const EvenNumber = number.filter((n)=>{
    return n%2 === 0;
})
console.log(EvenNumber);

// all odd no are filtered out>

const isOdd = (n) => {
    return n%2 !== 0;
}

// const OddNumber = number.filter(isOdd);
const OddNumber = number.filter((n) => {
    return n%2 !== 0;
})
console.log(OddNumber);
