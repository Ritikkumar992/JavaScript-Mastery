// static list vs live list.

//querySelectorALl hhamein static list dega.
//getElementsBySomething hamein live list dega.


const ul = document.querySelector(".todo-list");
const listItems = ul.getElementsByTagName("li");

const sizthli = document.createElement("li");
sizthli.textContent = "item6";

ul.append(sizthli);
console.log(listItems);