//// Highehr order function :  call back function... we will discuss it in detail..

// >> accessible by another function, and
// >> is invoked after the first function if that first function completes

// we can pass one function as a parameter to another function.

function myfun1(name){
    console.log("inside myfun1");
    console.log(`my name is : ${name}`);
}

function myfun(callback){
    callback("Ritik");
}
myfun(myfun1); // here myfun1 is passed as an argument to the myfun function.

