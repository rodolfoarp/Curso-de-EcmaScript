const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data = {
    frontend: 'Rodolfo',
    backend: 'Reysmer',
    design: 'Mariangelica',
}

const values = Object.values(data)
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ----'))
console.log('food'.padEnd(12, '   -----'))

const obj = {
    name: 'Rodolfo',
}

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'))
            : reject(new Error('Test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction();