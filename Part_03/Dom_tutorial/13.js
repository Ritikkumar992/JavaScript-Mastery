//document.createElement().
//append
//prepend
//remove

//target: we need to add new todo-list.

const newTodoList = document.createElement("li");
newTodoList.textContent = "Teach Student";

const newTodo = document.querySelector(".todo-list");
newTodo.append(newTodoList); // ---> add element at the end.
newTodo.prepend(newTodoList); // ---> add element at the start
newTodoList.remove(); // ===> it simply removes.
console.log(newTodoList);


//before
//after.

const newTodoList = document.createElement("li");
newTodoList.textContent = "Teach Student";
const newTodo = document.querySelector(".todo-list");

newTodo.after(newTodoList);
newTodo.before(newTodoList);