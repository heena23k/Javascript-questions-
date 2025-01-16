// // 1. print hello word

// let ans = "Hello Word!";
// console.log(ans);
// //  2. Add two numbers without function
// let a = 5;
// let b = 6;
// console.log(a + b);

// //  3 print the name in uppercase

// let name = "john Doe";
// console.log(name.toUpperCase());

// // 4 print even number
// for (let i = 0; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// // 5. log an object with properties name,age,and city
// let person = {
//   name: "john",
//   age: 34,
//   city: "jaipur",
// };
// console.log(person);

// //  6 write a function that add two number

// function add(x, y) {
//   return x + y;
// }
// console.log(add(9, 9));

// //  7. area of rectangel
// function Area(height, width) {
//   return height * width;
// }
// console.log(Area(8, 9));

// // 8. reverse string

// let str = "Hello";
// function Reverse(str) {
//   return str.split("").reverse("").join("");
// }
// console.log(Reverse(str));

// //  9. calculate factorial
// function Factorial(n) {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * Factorial(n - 1);
//   }
// }
// console.log(Factorial(5));

// //  10 prime or not
// function IsPrime(n) {
//   if (n <= 0) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (i % 2 === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// const n = 5;
// if (IsPrime(n)) {
//   console.log(`${n} is not a prime number`);
// } else {
//   console.log(`${n} is  a prime number`);
// }

// //   11. check given string is palindrom or not

// let string = "saas";
// function IsPalindrom(str) {
//   let result = string.split("").reverse().join("");
//   return str === result;
// }
// if (IsPalindrom(string)) {
//   console.log(`${string} is palindrom`);
// } else {
//   console.log(`${string} is not a palindrom`);
// }
// // / 12 . find max of two number
// let p = 6;
// let q = 8;
// function FindMax(x, y) {
//   return x > y ? x : y;
// }
// console.log(FindMax(p, q));

// //  13. multiply two numbers

// function multiply(c, d) {
//   return c * d;
// }
// console.log(multiply(5, 5));

// // 14. Create a function that returns the number of vowels in a string
// function countVowels(str) {
//   // Define a regex to match vowels (case-insensitive)
//   const vowels = /[aeiou]/gi;

//   // Match the vowels in the string and return the count
//   const matches = str.match(vowels);
//   return matches ? matches.length : 0; // Return 0 if no vowels are found
// }

// // Test the function
// const inputString = "Hello World!";
// const vowelCount = countVowels(inputString);

// console.log(`The string "${inputString}" contains ${vowelCount} vowels.`);

// //  15 print 1 to 10 number using for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// //  16 print all even numbers between 1 to 50
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // 17. find the sum of numbers
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(`sum is:${sum}`);

// // 17. reverse string using loop
// let stringg = "hello";
// let reversed = "";

// // Loop through the string in reverse order
// for (let i = stringg.length - 1; i >= 0; i--) {
//     reversed += stringg[i]; // Append the character at index 'i' to 'reversed'
// }

// console.log(reversed); // Output: "olleh"

// //  18 print the 10 fibonic series number

// let n= 10;
// let a= 0;
// let b= 1;
// for(let i=0;i<n;i++){
//   console.log(a);
  
//     let next = a+b;
//     a=b;
//     b=next;
// }

// 18. calculatw factorial using loop 
// let n= 5;
// let factorial = 1;
// for(let i=1;i<=n;i++){
//     factorial = factorial*i;
// }
// console.log(factorial);

//  19.prints all elements of an array
// let arr = [10,20,30,40,50];
// for(let i =0;i<=arr.length-1;i++){
//     console.log(arr[i]);
    
// }

// 20. prints each character of string on a new line using loop

// let str= "hello";
// for(let i = 0;i<str.length;i++){
//     console.log(str[i]);
    
// }

//  21.print only odd number only between 1 to 20
// for(let i =1;i<=20;i=i+2){
//     console.log(i);
    
// }

// 22.Write a loop to sum all elements in an array.
// let arr = [10,20,30,40,50];
// let sum = 0;
// for(let i=0;i<arr.length;i++){
//     sum = sum+arr[i];
//     console.log(sum);
    
// }

// 23.Write a function that checks if a number is even or odd and returns "Even" or "Odd" accordingly.
// function evenOdd(n){
//     return n%2===0?'even':'odd';

// }
// console.log(evenOdd(5));
// console.log(evenOdd(4));


// 24. Create a program that checks if a given year is a leap year

// function LeapYear(year){
//     return( year%4===0||year%400===0)?'leap year':'not leap year';

// }
// console.log(LeapYear(2023));
// console.log(LeapYear(2024));

// 25. Write a function that checks if a person is old enough to vote based on their age
// function EligibleVote(age){
//     return age>=18?"Eligible for vote":"not Eligible for voting";
// }
// console.log(EligibleVote(25));

// 26. Write a program that determines the largest of three numbers.

// function LargestThree(a,b,c){
//     return a>b&& a>c?a: (b>a&&b>c)?b:c;
// }
// console.log(LargestThree(4,7,8));
// console.log(LargestThree(4,5,3));
// console.log(LargestThree(9,2,1));

// 27. Write a program that determines the largest of three numbers.

// function PositiveOrNagative(num){
//     return (num>0?"positive":num<0?"negative":'zero')

// }
// console.log(PositiveOrNagative(34));

// 28. Create a program that checks if a number is divisible by both 3 and 5.

// function divisibleby3And5(num){
//     return num%3===0&&num%5===0}
// console.log(divisibleby3And5(15));


// 29. Write a function that returns the grade of a student based on their score.

// function getGrade(score){
//     if(score<0||score>100){
//         return "invalid";
//     }
//     if(score>90){
//         return "A";
//     }
//     else if(score>80){
//         return "B";
//     }
//     else if(score>70){
//         return "C";
//     }
//     else if(score>60){
//         return "D";
//     }
//     else{
//         return "F";
//     }
    
// }
// console.log(getGrade(85));

// 30 Find the sum of all elements in an array

// let arr = [10,20,30];
// let sum = arr.reduce((total,arr)=>total+arr,0);
// console.log(sum);

// 31  Create a function that returns the largest element in an array.

// let arr = [10,20,30,60,87,90];
// function largestElement(arr){
//     // return Math.max(...arr)
//     // 2nd approach
//     return Math.max(70,56,89,99)
// }

// console.log(largestElement(arr));

// 32 Write a function to reverse an array without using built-in functions

// function reverseArray(arr){
//     let start =0;
//     let last = arr.length-1;
//     while(start<last){
//         let temp = arr[start];
//         arr[start] = arr[last];
//         arr[last] = temp;
//         start++;
//         last--;

//     }
//     return arr;
// }
// let myarr = [1,2,3,4,5,6];
// console.log(reverseArray(myarr));
 

// // 33 Create an array of numbers and print each number using a loop
// let number = [1,2,3,4,5,6,7,8,9];
// number.forEach(num=>console.log(number)
// )

// 34 Write a function that finds the average of an array of numbers
// function findAverage(arr) {
    
//     if (arr.length === 0) {
//         return 0; // Return 0 if the array is empty to avoid division by zero.
//     }

//     let sum = 0;

//     // Calculate the sum of all elements
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     // Calculate and return the average
//     return sum / arr.length;
// }

// // Example usage
// let numbers = [10, 20, 30,40,50];
// console.log(findAverage(numbers));


// 35 Write a function to remove duplicates from an array.



