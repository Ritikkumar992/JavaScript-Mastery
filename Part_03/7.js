//function returning promises

function mypromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salts', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes('vegetables') && bucket.includes('salts') && bucket.includes('rice')) {
            resolve('Yummy lets eat it.')// we can pass anything in it.
        } else {
            reject('Could not eat it')// we can pass anything in it.
        }
    })
}

mypromise().then((myfriedRice)=>{
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