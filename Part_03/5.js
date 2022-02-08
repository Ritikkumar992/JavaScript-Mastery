//callBack, callBackHell, Pyramid of Doom
//asynchronous Programming

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");

// setTimeout(()=>{
//     heading1.textContent = "Heading1";
//     heading1.style.color = "red";
//     setTimeout(()=>{
//         heading2.textContent = "Heading2";
//         heading2.style.color = "blue";
//     },1000);
// },1000);


//call back hell

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");

// setTimeout(()=>{
//     heading1.textContent = "Heading1";
//     heading1.style.color = "red";
//     setTimeout(()=>{
//         heading2.textContent = "Heading2";
//         heading2.style.color = "blue";
//         setTimeout(()=>{
//             heading3.textContent = "Heading3";
//             heading3.style.color = "green";
//                 setTimeout(()=>{
//                     heading4.textContent = "Heading4";
//                     heading4.style.color = "pink";
//                     setTimeout(()=>{
//                         heading5.textContent = "Heading5";
//                         heading5.style.color = "brown";
//                         setTimeout(()=>{
//                             heading6.textContent = "Heading6";
//                             heading6.style.color = "gray";
//                             setTimeout(()=>{
//                                 heading7.textContent = "Heading7";
//                                 heading7.style.color = "yellow";
//                             },1000);
//                         },1000);
//                     },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);




// Pyramid of Doom

function changeText(element,text,color,time,onSuccessCallBack,onFailureCallBack){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallBack){
                onSuccessCallBack();
            }
        }else{
            if(onFailureCallBack){
                onFailureCallBack();
            }
        }
    },time)
}
// Pyramid of Doom
changeText(heading1,"heading1","green",1000,()=>{
    changeText(heading2,"heading2","red",2000,()=>{
        changeText(heading3,"heading3","yellow",1000,()=>{
            changeText(heading4,"heading4","gray",1000,()=>{
                changeText(heading5,"heading5","purple",1000,()=>{
                    changeText(heading6,"heading6","orange",1000,()=>{
                        changeText(heading7,"heading7","pink",1000,()=>{
                            changeText(heading8,"heading8","blue",1000,()=>{
                                changeText(heading9,"heading9","purple",1000,()=>{
                                    
                                },()=>{console.log('Heading9 does not exits')});
                            },()=>{console.log('Heading8 does not exits')});
                        },()=>{console.log('Heading7 does not exits')});
                    },()=>{console.log('Heading6 does not exits')});
                },()=>{console.log('Heading5 does not exits')});
            },()=>{console.log('Heading4 does not exits')});
        },()=>{console.log('Heading3 does not exits')});
    },()=>{console.log('Heading2 does not exits')});
},()=>{console.log('Heading1 does not exits')});