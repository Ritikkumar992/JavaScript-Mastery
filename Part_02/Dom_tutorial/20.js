//this keyword during events in jS;

const btn = document.querySelector(".btn-headline");

function clickMe(){
    console.log("You clicked me!");
    console.log("Value of this");
    console.log(this); // here this == btn.
}
btn.addEventListener("click",clickMe);

btn.addEventListener("click",()=>{
    console.log("You clicked me!");
    console.log("Value of this");
    console.log(this); // here this == window.
})