//keyPress Event.
//mouseover Event.


// whatever key we type on the body it gets printed on the console.
const body = document.body;

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})

//mouseover.

const mainButton = document.querySelector(".btn-headline");
console.log(mainButton)
mainButton.addEventListener("mouseover",(e)=>{
    console.log("mouseover event occured.")
})
//mouseleave
mainButton.addEventListener("mouseleave",(e)=>{
    console.log("mouseleave event occured.")
})