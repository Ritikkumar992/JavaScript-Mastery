// lexical Scope::

const myvar = "value1";

function myfun()
{
    // const myvar = "value2";
    
    const myfun1 = () => {
        // const myvar = "value3";
        console.log("inside my myFun1", myvar);
    }
    myfun1();
    console.log("----------------inside the myfun ----------");
    // const myvar = "value2"; // error: can't access myvar before initialization.

    const myfun2 = ()=>{
        const myvar = "valu4";
        const myfun3 =()=>{
            const myvar = "valu5";
            const myfun4 =()=>{
                const myvar = "valu6";
                console.log("-------------inside the myfun4 ",myvar);
            }
            console.log("----------------inside the myfun3 -",myvar);
            myfun4();
        }
        console.log("----------------inside the myfun2 -",myvar);
        myfun3();
    }
    myfun2();

    console.log('------------------ Inside the myfun--------------');
}

myfun();