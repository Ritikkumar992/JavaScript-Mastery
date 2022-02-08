// for loop example;


//NOte: var can be accesed from outside the loop also 
// But let can't be accessed from outside the loop.

for(let x = 0;x<9;x++){
    sum += x;
}
// console.log(x); //error x is not defined.
console.log(sum);

for(var y = 0;y<9;y++){
    sum += y;
}
console.log(y); // it is valid::: 
console.log(sum);