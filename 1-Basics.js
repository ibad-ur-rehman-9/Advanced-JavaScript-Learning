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

// *************** DATA Types Summary ******************

/* 
=> Primitive Data Types
1. number
2. string
3. boolean
4. bigInt
5. null
6. undefined
7. symbol

=> Non Primitive Data Types

1. Array
2. Objects
3. Functions

=> JavaScript a Dynamic Language or a Static Language

A dynamic language is the language in which we do not have to define data type explicitly. While in static , we have to. Hence JS is a dynamic language.

=> How does Symbol work?

Symbol gives a unique data type to each of the value.

For Eg : 
const Id1 = Symbol('2')
const Id2 = Symbol('2')

Dikhne mai tou Ids same hain , unique nahi hain. But because these are the symbols, they are different because they both are some unique data types...

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object



=> Now Stack Memory vs Heap Memory

-> All primitive Data types are saved as stack memory . Means whenever they are used or edited, a copy of them is made.
-> All Non - primitive data types are saved as heap memory. Means whenever they are used or edited, a reference of them is provided. 

Eg of heap mem:
    let userOne = {
        email : "myEmail@gmail.com",
        age: 20
    }

    let userTwo = userOne;

    userTwo.email = "IbadEmail@gmail.com";

    Now,
    console.log(userOne.email) // Gives IbadEmail@gmail.com
    console.log(userTwo.email) // Gives IbadEmail@gmail.com
*/