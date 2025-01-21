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

// But what if the number was 51abc ? It the Number() function still works but when u print it using typeof() , it gives NaN, which means not a number. So not everytime a string converted into a number is actually a number although the Number() function works fine. Therefore, we can say that NaN is also a datatype.

// *****************Operations******

let str1 = "1" + 2 + 2;
console.log(str1);              // gives 122
let str2 = 1 + 1 + "2"
console.log(str2);              // gives 22


// Yani agar string se start hua hai tou poori ko as a string deal kre ga. Agar baad mai kahin string arahi hai tou shuru walon ko as a number hi deal kia jaye ga.

// ******** Comparisions *******

// == -> Eqality Check
console.log("2" == 2) // Gives true because it automatically converts string into number

// === -> Strict Equality Check(Also compares the data type)
console.log("2" === 2); // False


// Baqi saaray comparision operators wese hi work krte hain jese C++ mai krte hain.