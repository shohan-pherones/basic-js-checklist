// 1. write 3 variables (number, string, boolean)
let myNumber = 75;
let herName = "Suraiya";
let isCloudy = true;

// 2. 2 variables (let, const)
let temperature = 28;
temperature = 31;
const pi = 3.1416;

// 3. simple math operations (+,-,*,/,%)
let a = 10;
let b = 2;
const sum = a + b;
const difference = a - b;
const multiply = a * b;
const division = a / b;
const remainder = a % b;

// console.log(sum, difference, multiply, division, remainder);

// 4. comparison (==, <, >, <=, >=, !=)
let x = 10;
let y = 12;
// console.log(x != y);

// 5. comparison (&&, ||)
let m = 5;
let n = 6;

// console.log(m == 5 || n == 5);

// 6. if else
let airSpeed = 199;
if (airSpeed >= 200) {
  //   console.log("nice air!");
} else {
  //   console.log("bad air");
}

// 7. while loop (7 to 19 odd  numbers)
let number = 7;
while (number <= 19) {
  //   console.log(number);
  number += 2;
}

// 8. declare an array (number of elements, update 4th element, add or remove element, check an element if exist)

let arr = [10, 15, 18, 25, 46, 78, 65, 41, 63];
let arrLength = arr.length;
arr[4] = 45;
arr.push(58);
arr.pop();
arr.shift();
arr.unshift(55);
let checkElement = arr.indexOf(5);
// console.log(checkElement);

// 9. for loop (display every element of an array)
let myArray = ["rima", "nishi", "akash", "batash", "priya", "kalam"];
// for (let i = 0; i < myArray.length; i++) {
//   const element = myArray[i];
//   console.log(element);
// }
for (let name of myArray) {
  //   console.log(name);
}

// 10. you have an array of numbers, display only numbers bigger than 80
let testArray = [18, 25, 34, 44, 51, 63, 78, 84, 88, 98, 115, 40];

for (let number of testArray) {
  if (number >= 80) {
    // console.log(number);
  }
}

//11. write a function that takes 3 numbers and returns multiplication of the 3 numbers
function multiplication(num1, num2, num3) {
  const total = num1 * num2 * num3;
  return total;
}

const getMultiplication = multiplication(10, 5, 3);
// console.log(getMultiplication);

//  12. declare an object and change any property
let smartphone = {
  model: "samsung a52",
  price: 34000,
  camera: 32,
  storage: 128,
};
smartphone.price = 31000;
let smartphonePrice = smartphone.price;
// console.log(smartphonePrice);
