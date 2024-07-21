/* Activity 1 Function Declaration  */

function checkNum(n) {
    if (n % 2 == 0) return `${n} is an Even Number `;
    else return `${n} is an  Odd Number`
}

// console.log(checkNum(708));

function calcSqr(n) {
    return `Square of ${n} is ${n * n}`
}

// console.log(calcSqr(5));

/* Activity 2 Functional Expression  */

function max2num(n, m) {
    if (n > m) {
        return `${n} is greater than ${m}`
    } else {
        return `${m} is greater than ${n}`
    }
}

// console.log(max2num(5,10));

function concatStr(a, b) {
    let c = String(a) + String(b)
    return c
}
let a = "hello this is me , "
let b = "Dhanjit Nath"
// console.log(concatStr(a,b)); // it works 
// console.log(concatStr(1,1)); // checking the edge case for numbers 

/* Activity 3 Arrow Function  */

const sum2num = (n, m) => {
    let c = Number(n) + Number(m)
    console.log(c);
}

// sum2num(4,6)

const checkChar = (str, character) => {
    let string = String(str)
    if (string.includes(character)) {
        return true
    } else {
        return false
    }
}

let str = " This is Ultra Programmer "
let char = "Programmer"

// console.log(checkChar(str, char));

/* Activity 4 Function parameter and default values  */

const product2num = (n, m = 5) => {
    return n * m
}

// console.log(product2num(3,7));
// console.log(product2num(3)); // default value for 5 works fine 

const greetPerson = (username, age = 19) => {
    return `Hellow ${username} , Nice to meet you . Are you ${age} years old ?`
}

// console.log(greetPerson("Dhanjit", 17));
// console.log(greetPerson("Developer"));

/* Activity 5 Higher - Order Functions  */

// A higher order function that takes a function and a number and calls that function that many times 

const greetMsg = () => {
    console.log("How are You Dhanjit Nath ");
}

const highFi = (fn, number) => {
    for (let i = 0; i <= number; i++) {
        fn()
    }
}

// highFi(greetMsg , 3);

// Function that takes 2 function and a value , applies the first function to the value and then applies second function to the result 

const superHiFi = (fn1, fn2, value) => {
    let newValue = fn1(value)
    return fn2(newValue)
}

// console.log(superHiFi(calcSqr, checkNum, 6))