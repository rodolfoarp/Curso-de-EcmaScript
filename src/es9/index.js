const obj = {
    name: 'Rodolfo',
    age: 21,
    country: 'Vz'
};

let {name, ...all} = obj;
console.log(name, all)

const obj = {
    name: 'Rodolfo',
    age: 21
}

const obj1 = {
    ...obj,
    country:'Vz'
}

console.log(obj1);


const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(err => console.error(err))
    .finally(() => console.log('Finalizo'))

    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2021-03-25');
    const year = match[1]
    const month = match[2]
    const day = match[3]
    
    console.log(year,month,day);