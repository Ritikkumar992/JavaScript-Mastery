// Objects inside the array.

const arr = [
    {user_id:1,name:"Ritik",gender:"male"},
    {user_id:2,name:"Rohit",gender:"male"},
    {user_id:3,name:"Rakesh",gender:"male"}
]

console.log(arr); // it will prints the whole arr.

console.log('----------------');

for(let i of arr){
    console.log(i); // it will prints the arr index wise.
}

console.log('----------------');

for(let i of arr){
    console.log(i.user_id); // it will prints the user_id.
    console.log(i.name); // it will prints the name.
    console.log(i.gender); // it will prints the gender.
}

