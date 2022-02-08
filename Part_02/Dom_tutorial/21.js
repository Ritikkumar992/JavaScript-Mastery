//adding click event on multiple elements:

const allbtn = document.querySelectorAll(".btn");
console.log(allbtn);

for(let button of allbtn){
    // button.addEventListener("click",()=>console.log("You clicked me!"))
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
}