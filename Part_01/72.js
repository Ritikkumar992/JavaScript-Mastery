// more about this keyword:

console.log(this); // print: window object.
console.log(window); // print: window object.

// this === window --> true
console.log(this === window);

function myfun(){
    console.log(this); // it will also print window object but myfun gets added to our window object.
}
myfun();
window.myfun();