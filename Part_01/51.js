// Default parameter.

const add = (a,b)=>{
    //handling default case: before ES2015.
    if(typeof b === "undefined"){
        b =  0;
    }
    return a+b;
}

console.log(add(12));


// modern way to handle default parameter.
const add1 = (a,b=0) => {
    return a+b;
}
console.log(add1(12,12));
