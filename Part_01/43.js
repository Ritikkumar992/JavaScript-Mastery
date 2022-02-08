// nested destructuring.

const arr = [
    {user_id:1,name:"Alex",gender:"Male"},
    {user_id:2,name:"Gargi",gender:"female"},
    {user_id:3,name:"Rakesh",gender:"male"}
]

const [user1,user2,user3] = arr;
console.log(user1);
console.log(user2);
console.log(user3);


//here :: {} -> i:0   {} -> i:1  {} -> i:2.
const [{name},{gender}, {user_id}] = arr;
console.log(name);
console.log(gender);
console.log(user_id);

console.log('-------------');


//here :: {} -> i:0   {} -> i:1  {} -> i:2.
const [{name:user1_name},{gender:user2_gender}, {user_id:user3_userid}] = arr;
console.log(user1_name);
console.log(user2_gender);
console.log(user3_userid);


