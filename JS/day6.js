/* Activity 1 Array Creation and Access */

const num1to5 = [1, 2, 3, 4, 5]
// console.log(num1to5);
// console.log(`First Element : ${num1to5[0]} , Last Element : ${num1to5[4]}`);

/* Activity 2 : Array Methods Basic  */

// num1to5.push(6)
// console.log(num1to5);

//  num1to5.pop();
// console.log(num1to5);

// num1to5.shift()
// console.log(num1to5);

// num1to5.unshift(1)
// console.log(num1to5);

/* Array Methods : Intermediate  */

// array.map 
/* 
def : 
map: It creates a new array by applying a function to each element in the original array. The map method doesn't change the original array; instead, it returns a new array with the results of applying the function to each element.
*/

/* let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
  }); 
  index and array are rarely used 
  */

/* let newArr = num1to5.map((e) => (e * 2) )
console.log(newArr); // a new array is obtained 2 times of number from 1 to 5  */


// array.filter

/* def : 

filter: It creates a new array with elements that pass a test specified by a callback function. The callback function should return true to keep the element, or false to discard it. Like map, filter doesn't modify the original array.

*/

/* let num1to10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filteredArray = num1to10.filter((x) => x % 5 == 0)

console.log(filteredArray);
 */

/* Array.reduce  */
/* def : 
reduce: It applies a function to each element of the array (from left to right) to reduce it to a single value. It takes an accumulator and each element in the array, performing a specified operation (such as addition, concatenation, etc.) and returning the accumulated result. The reduce method can optionally take an initial value for the accumulator.

*/

/* let  randomNumbers = [1,3,6,11,12,51]
let reducedValue = randomNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})

console.log(reducedValue);
 */


/* Activity 4 : Array iteration  */
let anime = ["Your Name", "A Silent Voice", "I want to eat your pancreas", "Josee the tiger and the fish ", "Violet Evergarden"]


// using for 
/* for (let index = 0; index < anime.length; index++) {
  const element = anime[index];
  console.log(element);bers.filter(x => x % 2 === 0);
} */

// using for.. of 

/* for (const animeName of anime) {
  console.log(animeName);
} */


//using forEach
//anime.forEach((item)=> console.log(item))


/* Activity 5 : 2-D array  */
let matrix = [
  [1, 2, 3, 14],
  [4, 5, 6, 11],
  [7, 13, 8, 9]
]

// console.log(matrix[0][3]); // should print 14
/* let fullFinishedSave = 0
matrix.forEach((element) => {
  let save = 0 
  element.forEach((newElem)=>{
    save += newElem 
  })
  fullFinishedSave += save
});

console.log(fullFinishedSave); 

just did something for fun */