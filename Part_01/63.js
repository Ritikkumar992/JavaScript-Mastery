// Important Array Methods:

// some method:: return true if alteast one  condition is true else return false.

const number = [2,41,61,81,11];

const ans = number.some((i)=>i%2 === 0);
//calback function --> return true / false;
//every method     --> return true / false;
console.log(ans);


//few more example:
//target: check we have some price > 3000 or not.

const userCart = [
    {product_id:1, product_name:"mobile",price:2000},
    {product_id:2, product_name:"tv",price:220},
    {product_id:3, product_name:"laptop",price:120},
    {product_id:4, product_name:"T-Shirt",price:10},
    {product_id:5, product_name:"Lower",price:100}
]

const res = userCart.some((user) => user.price > 3000);
console.log(res);