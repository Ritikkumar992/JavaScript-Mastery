//Solving our CallBack hell and Pyramid of dom.

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");



function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject();
            }
        },time)
    })
}

changeText(heading1, "heading1","red",1000)
   .then(()=>changeText(heading2, "heading2","purple",1000))
   .then(()=>changeText(heading3, "heading3","green",1000))
   .then(()=>changeText(heading4, "heading4","orange",1000))
   .then(()=>changeText(heading5, "heading5","yellow",1000))
   .then(()=>changeText(heading6, "heading6","blue",1000))
   .then(()=>changeText(heading7, "heading7","white",1000))
   .then(()=>changeText(heading8, "heading8","pink",1000))
   .then(()=>changeText(heading9, "heading9","black",1000))
   .catch(()=>console.log('error'))

