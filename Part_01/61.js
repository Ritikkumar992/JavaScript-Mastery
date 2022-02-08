// Important Array Methods:

// find method::

const myArr = ["Lion","Tiger","Camel","Cat"];

function length3(string){
    return string.length === 3;
}

// const res = myArr.find(length3);
const res = myArr.find((string)=>string.length===3);
console.log(res);


//few more examples:

const user = [
    {user_id:1, user_name:"ritik"},
    {user_id:2, user_name:"kunal"},
    {user_id:3, user_name:"ayush"},
    {user_id:4, user_name:"nitish"},
    {user_id:5, user_name:"mohit"}
];

const detail = user.find((id) => id.user_id === 3);
console.log(detail);