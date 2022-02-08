// use for loop in array.

let arr = ["item1","itme2","item3"];

for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

let arr2 = [];
for(let i = 0;i<arr.length;i++){
    //assigning the value of one arr to another one using for loop
    arr2.push(arr[i].toUpperCase());
}
console.log(arr2);