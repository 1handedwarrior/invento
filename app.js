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
let fruits = ['apple', 'banana', 'mango']
let milk = ['oat milk', 'cow milk', 'no milk']

function myOrder() {
    console.log(`Let me have ${fruits[2]} with ${milk[0]} please`)
}


function wholeOrder(){
    
    setTimeout(() => {
        let secondOrder = console.log('And a number 1')
        secondOrder;
    }, 2000)
}
myOrder()
wholeOrder()
*/
/*
let pi = 3.14;

console.log(Math.floor(pi))
console.log(Math.ceil(pi))
console.log(Math.round(pi))
console.log(Math.random(pi))
console.log(Math.random(pi))

let bro = 'chris';

function greet(){
    setTimeout(() => {
        console.log(`Sup ${bro}`)
    }, 3000)
}
*/
/*
//Find the bug :~]
let counter = 0;

document.getElementById('resetBtn').onclick = () => {
    counter = 0;
    document.getElementById('myLabel').innerHTML = counter;
}
document.getElementById('generateBtn').onclick = () => {
    counter = Math.random() * 50 + 1;
    counter = Math.toFixed(2);
    document.getElementById('myLabel').innerHTML = counter;
}
*/

document.getElementById('nine').onclick = () => {
    document.getElementById('myInput').textContent = '9'
} 