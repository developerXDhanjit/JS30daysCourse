/* Activity 1  for loop*/

// Number from 1 to 10 

/* for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
} */

// Multiplication table of 5 
/* let a = 5 
for(let i = 1 ; i < 11 ; i++){
    console.log(`${a} X ${i} = ${a*i}`);
} */

/* Activity 2   while loop */

// Sum of numbers from 1 to 10 using while loop 
/* let i = 1 ;
let sum = 0 ; 
while (i <= 10) {
    sum += i ;
    i++; 
}
console.log(sum); */

// Priniting numbers from 10 to 1 

/* let i = 10 
while (i <= 10 && i >= 1) {
    console.log(i);
    i--;
} */


/* Activity 3 do... while loop  */

// number from 1 to 5 
/* let i = 1
do {
    console.log(i);
    i++;
} while (i <= 5 ); */

//factorial of a number using do while loop 


/* function factorial(n) {
    let ans = 1
    if (n == 0) {
        return 1;
    }

    for (let i = 1; i <= n ; i++) {
        ans = ans * i
    }
    return ans ; 
}

console.log(factorial(5));
 */
/* let n = 5;
let ans = 1
let i = 1;
do {
    ans = ans * i;
    i++;

} while (i <= n);
console.log(ans); */

/* Activity 4 ... pattern printing  */
/* let n = 9
for (let i = 1; i <= n; i++) {
    let stars = ''
    for (let j = 1; j <= i ; j++) {
        stars += "*"
    }
    console.log(stars);
}
 */


/* Activity 5 ... continue and break  */

/* for(let i = 1 ; i<= 10 ; i++){
   if (i == 5) continue ; // skipping the number 5 from loop 
   console.log(i);
} */

/* for (let i = 1; i <= 10; i++) {
    if (i == 7) break; 
    console.log(i);
}
 */
