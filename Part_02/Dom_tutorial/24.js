//few more practise on click event.

//Target: color and background color should change when we click on button.

const allButtons = document.querySelectorAll("button");
console.log(allButtons.length);

for(let button of allButtons){
    button.addEventListener("click",(e)=>{
        console.log(e.target);
        e.target.style.color = "gray";
        e.target.style.backgroundColor = "yellow";
    })
}