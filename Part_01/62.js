// Important Array Methods:

// every method:: return true if every condition is true else return false.

const number = [2,4,6,8,10];

const ans = number.every((i)=>i%2 === 0);
//calback function --> return true / false;
//every method     --> return true / false;
console.log(ans);


//few more example:
//target: check we have price > 3000 or not.

const userCart = [
    {product_id:1, product_name:"mobile",price:12000},
    {product_id:2, product_name:"tv",price:22000},
    {product_id:3, product_name:"laptop",price:120000},
    {product_id:4, product_name:"T-Shirt",price:12000},
    {product_id:5, product_name:"Lower",price:10000}
]

const res = userCart.every((user) => user.price > 3000);
console.log(res);