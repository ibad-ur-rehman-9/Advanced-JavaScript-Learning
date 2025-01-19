// Let , variabales and constants syntax

const accountId = 1.33
let emailId = "Ibad Ur Rehman"
var age = 17                        // Out dated keyword hai . Pehle use hota tha , ub sirf let use hota hai lekin kaam dono ka same hai

city = "Jaipur"                     // Ye bhi variable kelie use hota hai but in efficient hai
let accountNumber                   // Undefined Variable

console.table([accountId, emailId , age, city, accountNumber]);

// Data Types in JavaScript

/*
1. number = 5 (Range is 2 to the power 52)
2. bigint = 56666666666666666666666666666666666666666666666666666666666666666666666666666666666(Yani number se bhi ziada range)
3. string = ""
4. boolean = true/false
5. null = ek standalone value hoti hai . It's one of the object in java script
Can be checked through console.log(typeof null) => Gives object
6. undefined = undefined is undefined...
*/

let num = "51"
console.log(typeof num)
num = Number(num);
console.log(typeof num);
