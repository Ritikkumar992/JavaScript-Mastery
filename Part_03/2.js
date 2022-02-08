//setInterval: print our req output with given time interval.

console.log('script Starts');
// setInterval(()=>{
//     console.log(Math.random());
// },1000);

console.log('script ends');


//Trust issue with setTimeOut

console.log('script Starts');

setInterval(()=>{
    let total = 0;
    for(let i =0;i<10000;i++){
        total += i;
    }
    console.log(`total is ${total}`);
    // console.log(Math.random());
},1000);

console.log('script ends');