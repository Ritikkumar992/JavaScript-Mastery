//Task: we need to change the background color of main-heading when we click on the learn more button.

const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-color");

//function to generate random color:
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`;
    return randomColor;
}

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})
