/* 1. Template Litral  */
let personName = "Hitesh Choudhary"
let age = 35 
// console.log(`Person : ${personName} , Age : ${age}`)

let multiLineString = `On of the ways of creating a multi line string is to 
use template literal . It doesn't throw any error at all. And you can inject
varible wherever you wish to `
// console.log(multiLineString);

/* 2. Destructuring  */

// Array desturing 
const [first, second] = [9 , 14 , 15 , 16 ]
// console.log(first, second);

const {title , author } = {
    title : "Yohooo",
    author : "Developer"
}

// console.log(title, author);

/* 3. Spread and Rest Operator  */

let array = [1,2,3,5,6,7,8]
let newArray = [...array, 92,292]
// console.log(newArray);

function sum(...args){
    let total = 0 ;
    for (const number of args) {
        total += number;
    }
    return total
}

// console.log(sum(1,2,3));

/* 4. default function parameter */

function product2num(a, b = 1 ){
    return a * b
}

console.log(product2num(2,3));

/* 5. Enhanced Object literal  */

let person = { personName , age }
// incase of same property and value

let methods = {
    sayHello(){
        return `Hellow Nayanjyoti !`
    },
    sum(...nums){
        let total = 0 ;
        for (const number of nums) {
            total += number
        }
        return total
    }
}

// console.log(person);
// console.log(methods.sum(14,15,20));

// Computed Property names 

let prop1 = "name"
let prop2 = "signIn"
let prop3 = "password"

let personNew = {
    [prop1] : "Alice",
    [prop2] : true,
    [prop3] : "123456"
}

console.log(personNew);
