/* Actiivity 1  */

/* var myNumber = 13;
console.log(myNumber)

let myString = "String Theory"
console.log(myString) */

/* Activity 2  */

/* const boolean = true
console.log(boolean); */

/* Activity 3 */

/* 
let datatype1 = "String"
let datatype2 = 8
let datatype3 = "someone you know"
let datatype4 = false
let datatype5 = ["Pokemon", "Your Name", "I want to eat your pancreas ", "A silent Voice"]
let datatype6 = {
    name: "Unknown",
    age: 17,
    programmer: true
}

let data = [datatype1, datatype2, datatype3, datatype4, datatype5, datatype6]

for (const item of data) {
    let dataType = typeof item
    console.log(`Data : ${item} , dataType : ${dataType}`)
} */

/* Activity 4 */

/* let statement = "Ram is good"
console.log(statement);
statement = "Ram is bad"
console.log(statement);
 */

/* Activity 5 */

/* const absoluteValue = 14 
absoluteValue = 15 
//throws error 
//TypeError: Assignment to constant variable.
console.log(absoluteValue); */


/* ExtraFeatures 1  */

let personName = "John"
let age = 25 
let isLearning = true 
let skills = ["Html","css","tailwindcss","git","javascirpt","animation"]
let extraDetails = {
    employed : false , 
    studied : "IIT B", 
    coreSkill : "Problem Solving" 
}

function printDataAndType(data){
    let dataType = typeof data 
    return `Data: ${data} , DataType : ${dataType}`
}

console.log(printDataAndType(personName))
console.log(printDataAndType(age))
console.log(printDataAndType(isLearning))
console.log(printDataAndType(skills))
console.log(printDataAndType(extraDetails))
