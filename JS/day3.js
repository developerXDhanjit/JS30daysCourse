/* Activity 1  */
/* let number = 101 // your number that is checked 
if(number < 0 ) {
    console.log(`The number ${number} is negative `);
} else if (number == 0 ){
    console.log(`The number ${number} is neutral `);
}else {
    console.log(`The number ${number} is positive `);
}
 */

/* let age = 17
if (age <= 0) {
    console.log("Please enter a valid age ");
} else if (0 <= age && age < 18  ) {
    console.log(`Your age is ${age} , You are not eligible to vote `);
}else {
    console.log(`Your age is ${age} , You are eligible to vote `);
} */

/* Activity 2 {Greatest of three numbers } */
/* 
let [num1, num2, num3] = [13, 113 ,1113 ]
if (num1 > num2) {
    if (num1 > num3) {
       console.log(`So number ${num1} is the greatest`);
    }else {
        console.log(`The number ${num3} is the greatest`);
    }
}else {
    if (num2 > num3 ) {
        console.log(`The number ${num2} is the greatest `);
    } else {
        console.log(`The number ${num3} is the greatest `);
    }
}
 */
/* explanation : 

- Check if num1 is greater than num2 or not 
if yes =>
   - check if num1 is greater than num 3 
   if yes => 
    num1 is greatest 
   if no => 
    num3 is greatest since it is bigger than num1 and num1 is greter than num2
if no => 
    - check if num2 is greater than num3 
    if yes =>
        num2 is the greatest 
    if no => 
        num3 is the greatest 
*/

/* Activity 3 {Switch Case }  */
/* 
let dayNum = 5;

switch (dayNum) {
    case 1:
        console.log("The day is Monday");
        break;
    case 2:
        console.log("The day is Tuesday");
        break; 
    case 3: 
        console.log("The day is Wednesday");
        break;
    case 4: 
        console.log("The day is Thrusday");
        break;
    case 5: 
        console.log("The day is Friday");
        break;
    case 6: 
        console.log("The day is Saturday");
        break;
    case 7: 
        console.log("The day is Sunday");
        break;

    default:
        console.log("Some Error Occured ");
        break;
} */

/* let score = 95

switch (true) {
    case (score >= 90 && score < 100):
        console.log("A grade ");
        break;
    case (score >= 80 && score < 90):
        console.log("B grade ");
        break;
    case (score >= 70 && score < 80):
        console.log("C grade ");
        break;
    case (score >= 60 && score < 70):
        console.log("D grade ");
        break;
    case (score >= 50 && score < 60):
        console.log("E grade ");
        break;
    case (score >= 0 && score < 50):
        console.log("F grade ");
        break;

    default:
        console.log("Invalid Score");
        break;
}


 */

/* Activity 4 {Ternary Operator } */
/* let number = 11 
let numberType = number % 2 == 0 ? "Even" : "Odd" ; 
console.log(number , numberType); */

/* Activity 5 {Leap Year } */
/* let year = 2000 

if (year % 400 == 0 ) {
    console.log(`The year ${year} is a Leap Year `);
} else if ((year % 4 == 0) && (year % 100 != 0) ) {
    console.log(`The year ${year} is a leaP year`);
} else {
    console.log(`The year ${year} is not a leap year`);
} */