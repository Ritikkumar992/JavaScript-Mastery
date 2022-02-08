// get and set attributes:
const link = document.querySelector("a");
console.log(link);

//get attribute
console.log(link.getAttribute("href")); //#home
console.log(link.getAttribute("href").slice(1)); //home

//set atribute
console.log(link.setAttribute("href", "http://www.goole.com/"));


const inputElement = document.querySelector(".form-todo input");
console.log(inputElement);
console.log(inputElement.getAttribute("type"));