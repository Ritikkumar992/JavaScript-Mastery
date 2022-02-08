//event bubling / event propagation.
//event capturing
//event delegation. 

// const body = document.body;
// const grandParent = document.querySelector(".grandParent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");


// //event capturing

// body.addEventListener("click",(e)=>{
//     console.log("Capturing !!! body")
// },true)
// grandParent.addEventListener("click",(e)=>{
//     console.log("Capturing !!! grandParent")
// },true)
// parent.addEventListener("click",(e)=>{
//     console.log("Capturing !!! parent")
// },true)
// child.addEventListener("click",(e)=>{
//     console.log("Capturing !!! child")
// },true)


// //event bubling ==> if a same event applies to the parent also then it automatically gets called.

// body.addEventListener("click",(e)=>{
//     console.log("you click on body")
// })
// grandParent.addEventListener("click",(e)=>{
//     console.log("you click on grandParent")
// })
// parent.addEventListener("click",(e)=>{
//     console.log("you click on parent")
// })
// child.addEventListener("click",(e)=>{
//     console.log("you click on child")
// })

// if we click on child:
/* O/P:
you click on child
you click on parent
you click on grandParent
you click on body
*/

//event delegation : we don't need to call eventListener for each event.
const body = document.body;
body.addEventListener("click",(e)=>{
    console.log(e.target); // it print the target value of our event.
    console.log(e.target.textContent); // it print the text value of our event.
})
