// function inside a function.

function app()
{
    const say = () => {
        console.log("Hello World:)");
    }
    const add = (a,b) => {
        return a+b;
    }
    const mult = (a,b) => a*b;

    console.log("inside app");
    // those funcitons which are inside the main function must be called inside that main funciton.
    say();
    console.log(add(2,3)); 
    console.log(mult(2,3)); 
}
app();
// the function which are declared inside any funciton must be call inside that funcion.
// say(); // error: say is not defined.