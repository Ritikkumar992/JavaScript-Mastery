// Important Array Methods:

//1. sort method ===>> it changes our array while
// map, filter, reduce doesn't change our array.

//Note: by default sort function in js sort by treating value as string according to the ascii value of the string
const number = [5,9,1200,410,3000];

number.sort();  // it doesn't sort as we wish.

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

console.log(number);

const name = ['ritik','kumar','abc','def','jkl','ABC','Ritik'];
name.sort();
console.log(name);

console.log('---------------');

const num1 = [1,3,2,5,4,7,6];

//prints in ascending order.
num1.sort((a,b) =>{
    return a-b;
});

//prints in desceding order.
num1.sort((a,b) =>{
    return b-a;
});

console.log(num1);

//DRY RUN::
// if a-b > 0       prints b then print a
// if a-b < 0       prints a then print b

//  a        b         res(a-b)           prints
//  1        3          -2<0              [1,3]
//  3        2          1>0               [1,2,3]
//  2        5          -3<0              [1,2,3,5]
//  5        4          1>0              [1,2,3,4,5]
//  4        7          -3<0             [1,2,3,4,5,7]
//  7        6          1>0              [1,2,3,4,5,6,7]

console.log('---------------------');

// sort the prices of product of items in flipkart.
const product = [
    {product_id:1, product_name:"mobile",price:12000},
    {product_id:2, product_name:"tv",price:22000},
    {product_id:3, product_name:"laptop",price:120000},
    {product_id:4, product_name:"watch",price:1200},
    {product_id:5, product_name:"T-shirt",price:1000}
]

const highLow = product.slice(0).sort((a,b)=>{
    return a.price - b.price;
});
const lowHigh = product.slice(0).sort((a,b)=>{
    return b.price - a.price;
});

console.log(product);
console.log(highLow);
console.log(lowHigh);