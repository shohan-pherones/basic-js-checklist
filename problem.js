// 1. conversion (feetToInch)
function feetToInch(feet) {
  const totalInch = feet * 12;
  return totalInch;
}

let myFeets = 1;
// const result = feetToInch(myFeets);
// console.log(result);

// 2. conversion (centimeterToMeter)
function centimeterToMeter(centimeters) {
  const totalMeter = centimeters / 100;
  return totalMeter;
}

let myCentimeters = 100;
// const myResult = centimeterToMeter(myCentimeters);
// console.log(myResult);

// 3. calculation (pageRequirements)
function pageRequirements(book1, book2, book3) {
  const book1Pages = 100;
  const book2Pages = 200;
  const book3Pages = 300;

  const book1TotalPages = book1Pages * book1;
  const book2TotalPages = book2Pages * book2;
  const book3TotalPages = book3Pages * book3;

  const totalPages = book1TotalPages + book2TotalPages + book3TotalPages;
  return totalPages;
}

const pageNeeded = pageRequirements(1, 1, 1);
// console.log(pageNeeded);

// 4. return the biggest name (bestFriend)
function bestFriend(names) {
  let biggest = names[0];

  for (let name of names) {
    if (name.length > biggest.length) {
      return name;
    }
  }
}

let myFriends = ["sabrina", "kabil", "ridhi", "babul", "shakh"];
const biggestName = bestFriend(myFriends);
console.log(biggestName);

// 5. return only positive (onlyPositive)
function onlyPositive(numbers) {
  let newArray = [];
  for (let number of numbers) {
    if (number >= 0) {
      newArray.push(number);
    }
  }
  return newArray;
}

let myNumbers = [-1, -5, 52, 36, 52, -7, 85, 0, 4];
const positiveNumbers = onlyPositive(myNumbers);
// console.log(positiveNumbers);
