//we wish to change the bacgrond color every sec.
const body = document.body;
const interval = setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
},1000);


// we wish to stop changing background color when we use stop button.
const button = document.querySelector("button");
button.addEventListener("click",()=>{
    clearInterval(interval);
    button.style.backgroundColor = body.style.backgroundColor;
});