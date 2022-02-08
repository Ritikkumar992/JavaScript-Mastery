//Understanding Callback function. ---> when a function call inside another function

//Example 1:
function myfun(callback){
    console.log('My fun is doing task1');
    callback();
}
//way 1;
function callback(){
    console.log('My fun is doing task2');
}
myfun(callback);

//way 2;
myfun(function(){
    console.log('My fun is doing task2');
})

//way3:

myfun(()=>{
    console.log('My fun is doing task2');
})
console.log('-------------------------');


//Example 2:
function getTwoNumberAndAdd(number1,number2,callback){
    if(typeof number1 =="number" && typeof number2 == "number"){
        callback(number1,number2);
    }else{
        console.log('Wrong input');
    }
}

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

getTwoNumberAndAdd(4,5,(num1,num2)=>{
    console.log(num1+num2)
});

console.log('-------------------------');


//Example 2.1:
function getTwoNumberAndAdd(number1,number2,onSuccess, onFailure){
    if(typeof number1 =="number" && typeof number2 == "number"){
        onSuccess(number1,number2);
    }else{
        onFailure();
    }
}


getTwoNumberAndAdd(4,5,(num1,num2)=>{
    console.log(num1+num2)
}, ()=>{
    console.log("Wrong input");
});