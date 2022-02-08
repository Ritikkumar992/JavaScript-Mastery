//Dom Traversal Methods:

const rootNode = document.getRootNode();
console.log(rootNode); //document.
console.log(rootNode.childNodes); //html.

const htmlElement = rootNode.childNodes[0];
console.log(htmlElement); // prints all the html code.
console.dir(htmlElement); // prints all the html code in obj format.

console.log(htmlElement.childNodes); // --> NodeList(3) [head, text, body]
console.log(htmlElement.childNodes[0]); // [head]
console.log(htmlElement.childNodes[1]); // [text]
console.log(htmlElement.childNodes[2]); // [body]

const headElementNode = htmlElement.childNodes[0]; // head
console.log(headElementNode.parentNode); // parent of head is html.

//sibling relationship:
console.log(headElementNode.nextSibling); // next sibling of head is #text
console.log(headElementNode.nextSibling.nextSibling); // next of next sibling of head is body

//return the next element sibling and ignore the text sibling.
console.log(headElementNode.nextElementSibling);

//tasK: we need to select the parent of <h1>My Heading</h1> and change the color of its parent.

const heading = document.querySelector("h1");
const parentHeading = heading.parentNode;
parentHeading.style.color = "red";
parentHeading.style.backgroundColor = "wheat";
console.log(parentHeading);

const body = parentHeading.parentNode;
body.style.color = "blue";
body.style.backgroundColor = "yellow";
console.log(body);

console.log('--------------------------');


//few more examples:
const container = document.querySelector("div");
console.log(container.childNodes); // it wil print all the child of our div
console.log(container.children); // it wil print only those children which don't have any text.