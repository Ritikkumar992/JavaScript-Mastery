// computed  Properties:

const key1 = "objecKey1";
const key2 = "objecKey2";


const value1 = "myvalue1";
const value2 = "myvalue2";


// const obj = {
//     objecKey1:"myvalue1",
//     objecKey2:"myvalue2",
// }

//Another way to do so..
const obj = {
    [key1]:value1,
    [key2]:value2
}
console.log(obj); //objecKey1: 'myvalue1', objecKey2: 'myvalue2