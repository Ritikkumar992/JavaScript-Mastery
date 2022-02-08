//Change Text
//Text Content and Inner Text

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);

// main-heading text gets changed!
mainHeading.textContent = "This is text changed!!!"
console.log(mainHeading.textContent);

//inner text property help to display only the inner content of the text.
mainHeading.innerText = "This is text changed!!!"
console.log(mainHeading.innerText);

