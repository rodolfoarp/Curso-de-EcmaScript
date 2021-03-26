function newFunction(name, age, country){
    var name = name || 'Rodolfo';
    var age = age || 21;
    var country = country || 'VZ';
    console.log(name, age, country);
}

function newFunction2(name = 'Rodolfo', age = 21, country = 'VZ' ){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Jackson', 18, 'Vz')

let lorem = 'Qui consequatur. Commodi. Ipsum vel duis yet minima \n' 
+ 'otra france epica que necesitamos.' 

//es6
let lorem2 = `otra frace epica que necsitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Rodolfo',
    'age': 21,
    'country': 'VZ'
}

console.log(person.name, person.age);
let {name} = person
console.log(name)
// es6
let team1 = ['Oscar' , 'Julian', 'Ricardo'];
let team2 = ['Rodolfo' , 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

// es6
var hola = 'hola';

{
    var globalVar = 'global var';
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);

let name = 'oscar';
let age = 32;

// es5
obj = {name: name, age: age};
// es6
obj2 = {name, age};
console.log(obj2);

const names = [
    {name: 'Rodolfo', age: 21},
    {name: 'Jessica', age: 27}
]

//es6
let listOfNames = names.map((item)=>{
    console.log(item.name)
})

//es5
let listOfNames = names.map(function(item){
    console.log(item.name)
})

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve('Hey!');
        } else {
            reject('Ups');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(err => console.error(err))


class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))

// es5
let hello = require('./module')
console.log(hello());

//es6
function* helloWorld() {
    if (true){
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

