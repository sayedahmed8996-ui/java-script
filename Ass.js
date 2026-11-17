//A. Part 1: Coding Questions
//A.1
let result = Number("123") + 7;
console.log(result);

//A.2
function checkFalsy(value) {
  if (!value) {
    return "Invalid";
  }
  return value;
}
console.log(checkFalsy(0));

//A.3
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//A.4
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//A.5
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

//A.6
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid Day";
  }
}
console.log(getDayName(2));

//A.7
const strings = ["a", "ab", "abc"];
const lengths = strings.map((str) => str.length);
console.log(lengths);

//A.8
function checkDivisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(checkDivisible(15));

//A.9
const square = (num) => num ** 2;
console.log(square(5));

//A.10
const person = { name: "John", age: 25 };
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
console.log(formatPerson(person));

//A.11
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

//A.12
function waitSuccess() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
waitSuccess().then((res) => {
  console.log(res);
});

//A.13
function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 3, 7, 2, 4]));

//A.14
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys({ name: "John", age: 30 }));

//A.15
function splitString(str) {
  return str.split(" ");
}
console.log(splitString("The quick brown fox"));


//B. Part 2: Essay Questions
//B.1
// // //Difference: forEach is an Array method that cannot use break, continue, or await. Meanwhile,
// // for...of is a loop statement that fully supports break, continue, and async/await operations.  
// /​/// Usage: Use forEach for simple array iterations without breaking.
// // Use for...of when you need control over the loop (like break) or when working with async code.

//B.2
//Hoisting: JavaScript's behavior of moving declarations to 
//the top of their scope before execution (var initializes as undefined, while let/const do not).
//TDZ: The time between entering a scope and the actual variable declaration where let/const cannot be accessed.
{
    // TDZ starts here
    // console.log(x); // ReferenceError
    let x = 10; // TDZ ends here
}

//B.3
//​== (Loose Equality): Compares values after performing implicit type conversion (coercion) if types differ (e.g., 5 == "5" is true).  
//​=== (Strict Equality): Compares both value and data type without any type coercion (e.g., 5 === "5" is false).

//B.4
//​How it works: Code inside try runs; if an error occurs,
// execution immediately jumps to catch to handle the error safely instead of crashing the app.
//​Importance in Async: Async operations (like fetching data) often fail due to network or server issues.
//try...catch handles these failures gracefully.

//B.5
// //​Type Conversion: Explicit (manual) conversion of data types by the programmer.
// //​Example: Number("123").  
// ​////Type Coercion: Implicit (automatic) conversion of data types done by JavaScript during operations.
// ​////Example: "10" - 5 results in
