// Important Array Methods:

//1. reduce method ===>> it return a single value.

//aim: find the sum of all array.

const number = [1,2,3,4,5];

const sum = number.reduce((accumulator,currenetValue)=>{
    return accumulator+currenetValue;
},0)
console.log(sum);

// DRY RUN::
//     accumulator         currentValue        return
//      0                       1               0+1 = 1
//      1                       2               1+2 = 3
//      3                       3               3+3 = 6
//      6                       4               6+4 = 10
//      10                      5               10+5 = 15

//Note: accumulator = return value --> after every iteration.
//      currentValue = arr[++index],


//few more example:

// target: we are given a userCart of flipkart where we have mutliple items.
// we need to return the sum of all the prices of the item.

const userCart = [
    {product_id:1, product_name:"mobile",price:12000},
    {product_id:2, product_name:"tv",price:22000},
    {product_id:3, product_name:"laptop",price:120000}
]

const price = userCart.reduce((accumulator,currenetValue)=>{
    return accumulator + currenetValue.price;
},0);

console.log(price);

// DRY RUN::
//     accumulator         currentValue.price    return
//      0                       1200             1200
//      1200                    22000            13200
//      13200                   120000           154000

//Note: accumulator = return value --> after every iteration.
//      currentValue = userCart[++index],