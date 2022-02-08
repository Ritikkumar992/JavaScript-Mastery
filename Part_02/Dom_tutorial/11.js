//Target : find the no of classes of <section class="section-todo container">

const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList); // return the no of class of our section .

//adding class using javaScript;
// sectionTodo.classList.add('bg-dark');

//removing a class using JS:
// sectionTodo.classList.remove("container");

//check a class exist or not exists.
const ans = sectionTodo.classList.contains("container");
console.log(ans); // return true if it contain container class else return false.

//toogle class removes an already existing class else add that class.
sectionTodo.classList.toggle("bg-dark");// here it add bg-dark class.
sectionTodo.classList.toggle("bg-dark");// here it remove bg-dark class.