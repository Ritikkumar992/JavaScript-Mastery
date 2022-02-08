// Map in js : 
// it is iterables .
// note map method of array and Map both are totally differnt.

//store data in ordered fashion.

// store key value pair like object.
// duplicate keys are not allowed like object.

// differnce between Map and object:

// in object we can only have string or symbol as key.

// in Map we can  have anything like array, string, number, etc.. as key.


// key value pair.

const person = new Map();
person.set('firstName', 'riitk');
person.set('age',19);
person.set(1,'one');
person.set([1,3,4,],'arr');
person.set({name:'ritik',gender:'male'},'obj');

console.log(person);
console.log('---------------------------');

// returning key of the whole map.

for(let key of person.keys()){
    console.log(key);
}

console.log('---------------------:))--------------');

//printing the key value pair of the map.
//here [key,value] -> destructuring 

for(let [key,value] of person){
    console.log(key, value);
}

console.log('---------------------:))--------------');

// few more examples:;---->>

//creating an object.

const person1 = {
    id:1,
    first_name:'ritik'
}

//we wish to add some more details to our person1 but these details must be store in a Map.

const extraInfo = new Map();
extraInfo.set(person1 , {age:19, gender:'male'});

console.log(extraInfo);
console.log(person1.id);
console.log(person1.first_name);

console.log(extraInfo.get(person1)); // return all those info i.e => {age: 19, gender: 'male'}
console.log(extraInfo.get(person1).gender); // return all those info i.e => {age: 19, gender: 'male'}
console.log(extraInfo.get(person1).age); // return all those info i.e => {age: 19, gender: 'male'}

