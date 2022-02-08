// clone using object.assign.

const obj1 = {
    name:'ritik',
    age:19
}

// const obj2 = obj1; // by doing so if we wish to change some values of obj1 , it will effect obj2 also.

// const obj2 = {...obj1}; // by using spread operator we can make a clone and
// and if we wish to change some value of obj1 it won't be reflected in obj2.

const obj2 = Object.assign({},obj1);
                       
console.log(obj1);
console.log(obj2);

// if we change some values of obj1.
obj1.gender = 'male';

console.log(obj1);
console.log(obj2);


