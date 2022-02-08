//Promise.resolve
//Promise.chaining.

//Promise.resolve

const myPromise = Promise.resolve(5);
Promise.resolve(5).then(value =>{
    console.log(value);
})

//then()
//then method hamesha promise return karta hai.

//Promise.chaining.

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve('foo');
    })
}
myPromise()
   .then((value)=>{
       console.log(value);
       value += 'bar';
       return value;
   })
   .then((value)=>{
       console.log(value);
       value += 'bazz';
       return value;
   })
   .then(value =>{
       console.log(value);
   })