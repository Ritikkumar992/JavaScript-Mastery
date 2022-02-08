// intro to events
//1.click event.

//There are 3 ways to fire click event.
//1. way: using onclick in the index file where we wish to add.
//<button class="btn btn-headline" onclick="console.log('You clicked me.')">Learn More</button>

//2. Way: making a function.
const btn = document.querySelector(".btn-headline");
btn.onclick = () => console.log("You clicked me!!");

//3.Way: usign addeventListener method.
// function clickMe(){
//     console.log("You clicked me!!!!!!!!!");
// }
// btn.addEventListener("click",clickMe);
// btn.addEventListener("click",function(){
//     console.log("You click me!");
// })
btn.addEventListener("click",()=>console.log("You Click Me!!!!"));

