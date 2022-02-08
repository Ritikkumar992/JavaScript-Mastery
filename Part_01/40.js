// spread operator.
const arr1 = [1,3,5];
const arr2 = [2,4,6];

const newArr = [...arr1, ...arr2, 12,45,67,89];
console.log(newArr);


const new1 = [..."abc"];// strings are iterable.
// const new2 = [...123455889]; //error: since numbers are non-iterable.
console.log(new1);

console.log('----------');

// spread operator in obj:
const obj1={
    key1:"value1",
    key2:"value2",
    key3:"value3"
};
const obj2={
    key4:"value4",
    key5:"value5",
    key6:"value6"
};

const newobj = {...obj1, ...obj2, key69:"value69"};
console.log(newobj);

// gives the index of all the letters of our alphablet.
const alphabet ={... "abcdefghijklmnopqrstuvwxyz"};
console.log(alphabet);