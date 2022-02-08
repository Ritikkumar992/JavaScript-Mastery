// if else condition.

let age = 18;

if(age>=18){
    console.log("User can drive");
}
else{
    console.log("User can't drive.");
}

// check a no is divisible by 2 or not.

let num = 122;

if(num%2 == 0){
    console.log("Num is even:",num);
}
else{
    console.log("Num is odd:",num);
}

// check a no is prime or not.

let a = 121;

if(a == 1|| a%2 == 0 || a%3 == 0){
    console.log(a,"is not prime");
}
else if(a == 2 || a == 3){
    console.log(a,"is Prime");
}
else{
    for(var i = 5;i<(a**0.5);i = i+6){
        if(a%i == 0 || a%(i+2) == 0){
            console.log(a,"is not Prime");
        }
    }
    console.log(a,"is Prime");
}