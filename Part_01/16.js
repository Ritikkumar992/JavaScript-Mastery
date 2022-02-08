// and / or operator.

//&& ---> return true if both conditions are true else false.

let name = "Ritik";
let age = "19";

if(name[0] === 'R' && age >=18){
    console.log(true);
}
else{
    console.log(false);
}

console.log('------------------------');
//|| ---> return true if any one of the  conditions are true else false.
if(name[1] === 'i' || age >= 123){
    console.log(true);
}
else{
    console.log(false);
}