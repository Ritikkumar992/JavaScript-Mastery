//innerHTML:
//any html code which lies inside any section is our innerHTML code.

const headline = document.querySelector(".headline");
console.log(headline.innerHTML); // prints all the code which is inside our heading class.
headline.innerHTML = "<h1> Inner HTML changed </h1>";
//we can add more items also.
headline.innerHTML += " <button class = \"btn btn-headline\"> Learn More </button>";
console.log(headline.innerHTML);

//Note \" ---------------------> " if we have to use "" in "" then we have to use \