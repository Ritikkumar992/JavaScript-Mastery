//Synchronous Programming VS Asynchronus Programming


//Synchronous Programming : single threded -> programs run line by line.

// O/p: script starts ---> (10000) indide the for loop ----------> script ends

// console.log("Script starts !!!")
// for(let i =0;i<10000;i++){
//     console.log("inside the for loop ");
// }
// console.log("Script ends !!!")

//Asynchronus Programming.

// console.log("Script starts !!!")

// // function hello(){
// //     console.log('hello');
// // }
// // setTimeout(hello, 1000); // it will print hello after 1sec.
// setTimeout(()=>{
//     console.log('inside setTime out');
// },1000); //1000ms is the min time delay
// console.log("Script ends !!!")


//setTimeOut()

// console.log('Script starts !!');
// //setTimeout code always runs at the end of the code.
// setTimeout(()=>{
//     console.log('inside setTimeout');
// },1000); // 1000ms is the min time delay

// for(let i = 0;i<1000;i++){
//     console.log('.........');
// }

// console.log('Script ends!!');


//Clearing setTimeOut()

console.log('Script starts !!');

const id = setTimeout(()=>{
    console.log('inside setTimeout');
},1000); // 1000ms is the min time delay

for(let i = 0;i<1000;i++){
    console.log('.........');
}
console.log(`SetTimeOut id is ${id}`);

console.log("Clearing setTimeOut");
clearTimeout(id); // it clear our setTimeOut part.

console.log('Script ends!!');