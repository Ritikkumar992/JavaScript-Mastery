//event object:

const firstbutton = document.querySelector(".btn-headline");
console.log(firstbutton);
firstbutton.addEventListener("click",function(){
    console.log(this);
})


//jav v kisi v event per event listener add krunga.
//js engine --------> line by line execute krta h code ko.
//browser -----------> js engine + extra feature.
//browser -----------> js engine + webAPIs.

//jab browser ko pata chala ki user ne even perform kia
//jo hum listen kar rahe hai
// browser---------------2.
//1.) callBack function hai vo js engine ko degi...
//2.) callBack function ke sath vo jo event hua hai iski information bhhi dega.

firstbutton.addEventListener("click",function(event){
    console.log(event); // pointer event
})