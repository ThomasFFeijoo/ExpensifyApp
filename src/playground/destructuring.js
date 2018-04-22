/*

Object Destructuring

const person = {
    age: 26,
    location: {
        city: 'Floripa',
        temp: 30
    }
};

// name = Anonymous, set default
const { name: firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;
console.log(`${firstName} is ${age}`);

/!*
if(person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}
*!/

// temp: temperature, rename temp to temperature
const { city, temp: temperature } = person.location;

if(city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
}*/

/*

const book = {
    title: 'Sapiens',
    author: 'Yuval Harari',
    publisher: {
        name: 'Harper'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);*/


// Array Destructuring

/*const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You're in ${city} ${state}.`);*/

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , price] = item;

console.log(`A medium ${product} costs ${price}`);