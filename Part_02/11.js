function fun(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log("Hi I am called");
            counter++;
        }
        else{
            console.log("I am already been called!!!");
        }
    }
}

const myfun = fun();
myfun();
myfun();
myfun();