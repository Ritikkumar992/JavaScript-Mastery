// Highehr order function : function returning function.


function myfun(){
    function hello(){
        return "Hello World:)" ;
    }
    return hello; // this will return the whole hello function.
}

const ans = myfun();
console.log(ans);  // it return the whole hello function
console.log(ans());// it return the "Hello World".
