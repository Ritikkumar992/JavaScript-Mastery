const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

const newLi  = document.createElement("li");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); // it prevent our browser to reload the page.
    const newTodoText = (todoInput.value); // the value which we enter in todolist.
    const newLi  = document.createElement("li"); //create kr rahhe h new li
    const newInnerHTML = 
    `<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
      <button class="todo-btn done button">Done</button>
      <button class="todo-btn remove button">Remove</button>
    </div>`
    newLi.innerHTML = newInnerHTML; // changing the inner html of newli.
    todoList.append(newLi); //finally append the newLi to our todolist.
    todoInput.value = "";  // it remove the input value form the text area after click event.
})

//working with done and remove butto.
todoList.addEventListener("click",(e)=>{
    //check if user click on done button or not.
    if(e.target.classList.contains('remove')){
        const targetLi = e.target.parentNode.parentNode; //button -> div(parent) -> li(parentNode)
        targetLi.remove();
    }
    if(e.target.classList.contains('done')){
        const liSpan = e.target.parentNode.previousElementSibling; // button -> div(parent) -> span(sibling)
        liSpan.style.textDecoration = "line-through";
    }
})