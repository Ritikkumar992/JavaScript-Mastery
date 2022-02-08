//how to get dimension of element.

//Target: find the dimension of the section-todo.

const sectiontodo = document.querySelector(".section-todo");
const info = sectiontodo.getBoundingClientRect();//gives all the dimension.
// const info = sectiontodo.getBoundingClientRect().height;//gives the height.
// const info = sectiontodo.getBoundingClientRect().width;//gives the width.
console.log(info);