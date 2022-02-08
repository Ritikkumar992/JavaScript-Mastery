//loops:
//get multiple elements by using getElments by class name.

let navItems = document.getElementsByTagName("a"); //HTML Collections.
console.log(navItems);

//#Note: HTML collections is array like object.
//NOte : we can use simple for loop, for of loop but can't use forEach Method().

for(let i = 0;i<navItems.length;i++){
    let navItem = navItems[i];
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
}

console.log('------------------');

for(let i of navItems){
    let navItem = i;
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
}

console.log('------------------');

// but what if we forcifully wish to use forEach method in HMTL Collections.
//first of all we need to convert HTML collection to array.
navItems = Array.from(navItems);
navItems.forEach((navItem)=>{
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
})


//get multiple elements by using getElments by querySelectorALl

let navItems = document.querySelectorAll("a"); //HTML Collections.
console.log(navItems);

//#Note: HTML collections is array like object.
//NOte : we can use simple for loop, for of loop as well as forEach Method().

for(let i = 0;i<navItems.length;i++){
    let navItem = navItems[i];
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
}

console.log('------------------');

for(let i of navItems){
    let navItem = i;
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
}

console.log('------------------');

navItems.forEach((navItem)=>{
    navItem.style.color = "green";
    navItem.style.backgroundColor = "white";
})