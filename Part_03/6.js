//Promises in JS: Asynchronous in feature.

//Promise gets added to microTask Queue while SetTimeOut gets added to callBackQueue.
// microTask Queue is called first then callBackQueue is called.

console.log('script starts');

const bucket = ['coffee','chips','vegetables','salts','rice'];

//creating our promise.

const mypromise = new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables')&&bucket.includes('salts')&&bucket.includes('rice')){
        resolve('Yummy lets eat it.')// we can pass anything in it.
    }else{
        reject('Could not eat it')// we can pass anything in it.
    }
})

// consuming our promise.
mypromise.then((myfriedRice)=>{
    console.log("lets eat",myfriedRice);
}).catch((error)=>{
    console.log(error);
})
setTimeout(()=>{
    console.log('This is set time out');
},0);
for(let i = 0;i<1000;i++){
    console.log(Math.random(),i);
}

console.log('script ends');


//O/p: script starts -> for loop * 1000 -> script ends -> lets eat Yummy lets eat it. -> This is set time out