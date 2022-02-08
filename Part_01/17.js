//nested if else.

//winning game:Build a game which return as follow:
// let num = 19; if u guess no less than num it return plz guess less no
// and if u gues no greater than num then it return plz guess some greate no.

let num = 19;
//taking input from user through chrome:
let input = +prompt("Enter your number");

// console.log(typeof input);
//note : here prompt takes input in the form of string and if we need it in the form of integer we need to add +

if(num == input){
    console.log("You Win!!");
}
else{
    if(num > input){
        console.log("Please guess some greater number");
    }
    else{
        console.log("Please guess some smaller number");
        
    }
}
