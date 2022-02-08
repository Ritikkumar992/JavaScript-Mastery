// select element using Query Selector.
// it select anything just we need to put # before id and . before class.

// print content releated to main-heading id.
const mainHeading = document.querySelector("#main-heading");
console.log(mainHeading);


//print content releated to header class
const header = document.querySelector(".header");
console.log(header);

// In this case it will only print first content of nav-item class 
const navItem = document.querySelector(".nav-item");
console.log(navItem);

// In this case it will only print all 3 content of nav-item class 
const navItemAll = document.querySelectorAll(".nav-item");
console.log(navItemAll);