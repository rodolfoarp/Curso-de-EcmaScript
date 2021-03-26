button.addEventListener('click', () => {
    console.log(this);
    console.log(globalThis);
})

console.log(globalThis);
console.log(globalThis);
console.log(globalThis);

let num = Math.pow(2,21) - 1;

console.log(++num);
console.log(++num);
console.log(++num);

let bigNum = 91455080949292492n;

console.log(++bigNum);
console.log(++bigNum);
console.log(++bigNum);

console.log(typeof 10);
console.log(typeof 10n);


const p1 = new Promise ((resolve,reject) => resolve('Promesa Resuelta'))
const p2 = new Promise ((resolve,reject) => reject('Promesa Rechazada'))
const p3 = new Promise ((resolve,reject) => resolve('Promesa Resuelta'))

Promise.allSettled([p1,p2,p3])
    .then(response => console.log(response))
    .catch(err => console.error(err))
