//set in Js:
//syntax:  new Set(iterables)
//set only store unique value.
//set  have its own method.
//no index based 
//order is not defined.

const number = new Set([1,2,3,3,2,1]);
console.log(number);// print in any order
console.log(number[3]); // undefined --> no index based.

const name = new Set(['ritik','rohit','ritik','rahul']);
const name1 = new Set('riitiiikkkk');
console.log(name);
console.log(name1);

const arr = ['item1','item2','item3','item1'];
const res = new Set();
res.add(1);
res.add(2);
res.add(3);
res.add(4);
res.add(5);
res.add(1);
res.add(arr);
res.add(arr); // don't store the same array.

res.add(['item4','item5']);// here both array have diffent location in their call stack.
res.add(['item4','item5']);// so they both get store in set.

// check a given item is present in the set or not.
// .has () --> return true if elem is present else return false.

console.log(res.has(1)); // true.
console.log(res.has(11));// false.

console.log(res)

console.log('------------------------');

// sets are iterables:
for(let num of res){
    console.log(num);
}

console.log('------------------------');

const myarr = [1,2,3,4,5,1,2,3,4,5];
const uniqueArr = new Set(myarr);
console.log(uniqueArr);

// we need to find the length of unique arr.
console.log(uniqueArr.length); // this won't work.

// right way to do so...

let length = 0;
for(let len of uniqueArr){
    length ++;
}
console.log(length);

console.log(myarr);