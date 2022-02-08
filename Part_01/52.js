//handling rest parameter :


const add = (a,b,...c)=>{ // ...c --> O/P; c is 3,4,5,6,7,8,9
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
// we wish to add all those remaining value in the c as a vector.
add(1,2,3,4,5,6,7,8,9);


// another example:
// we are given a fun with unknown no of parameter, we need to print the sum of all those parameter.

const addAll = (...arr) =>{
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    console.log(`sum is : ${sum}`);
}
addAll(1,2,2,3,4,5,6,7,8,9,12,13,14,15,16);