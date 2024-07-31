/*
//class: a special function acting as a template for creating objects
class gingin {
    constructor(year, model){
        this.year = year;
        this.model = model;
    }
}

let gsxr = new gingin ('2005', '750');
let yami = new gingin ('2008', 'r6');
let kawi = new gingin ('2017', 'zx10');
*/
/*
for(let i = 0; i <= 40; i++){
    if(i % 2 == 0){
        console.log('fizz')
    }
    else if (i % 4 == 0){
        console.log('buzz')
    }
    else if (i % 5 == 0){
        console.log('fizzBuzz')
    }
    
}
*/

/*
let pi = 3.14;

console.log(Math.floor(pi))
console.log(Math.ceil(pi))
console.log(Math.round(pi))
console.log(Math.random(pi))
console.log(Math.random(pi) * 100)
/*
let bro = prompt('Enter your name: ')

function greet(){
    setTimeout(() => {
        alert(`Sup ${bro}`)
    }, 5000)
}
    
greet()
*/
/*
//Find the bug :~]
let counter = 0;

document.getElementById('resetBtn').onclick = () => {
    counter = 0;
    document.getElementById('myLabel').innerHTML = counter;
}
document.getElementById('generateBtn').onclick = () => {
    counter = Math.random() * 50;
    document.getElementById('myLabel').innerHTML = counter.toFixed(2);
}
*/

/*
let username = prompt('Enter your username: ')

function task1(callback) {
    console.log(`Whats up ${username}`)
    callback();
}

function task2(callback) {
    console.log(`Lets fuck vegeta up`)
    callback();
}

function task3(callback) {
    console.log(`Loredm ipsum`)
    callback();
}

function task4(callback) {
    console.log(`Lorem ipsum`)
    callback();
}

function task5(callback) {
    console.log(`Whats up ${username}`)
    callback();
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    console.log(`goodbye ${username}`)
                })
            })
        })
    })
})
*/



/*
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})

promise 
    .then(response => response.json())
    .then(data => console.log(data));


fetch('https://pokeapi.co/api/v2/pokemon/onix')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(() => console.error('Whoops error'))
*/
/*
let input = document.getElementById('enterBtn');
let pokemonSelection = document.getElementById('pokeChoice');

input.onclick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelection.value}`)
    .then(response => {
        if(!response.ok){
            throw new Error ('Whooooops error')
        }
        else{
            return (response.json())
    }})

    .then(data => console.log(data))
    .catch(error => console.error('Whoops error!'));

    () => {
        document.getElementById('pokeChoice').innerHTML = pokemonSelection;
    }
}
*/

const myInput = document.getElementById('myInput')

function displayValue(input){
    myInput.value += input;
}
function clearDisplay(){
    myInput.value = ' ';
}
function calculateDisplay(){
    myInput.value = eval(myInput.value)
}

