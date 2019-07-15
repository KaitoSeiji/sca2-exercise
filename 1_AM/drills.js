const assert = require("assert");

// Feel free to look things up online!

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  const list1 = []
  const res = list1.push(str);
  const split = str.split(" ")
  return(split);
};

const reverse1 = function(str) {
  // TODO - write a function which reverses the string
  const list2 = []
  const reset = list2.push(str);
  const split0 = str.split("").reverse()
  return(split0)
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  const person = promt("Hello, my name is Khaatir.", "What's yours?")
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
};

// Write tests here:

console.log(tokenize("Hi, I'm Bob"))
console.log(reverse1("Hello"))
assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
// asssert (reverse("3df") === "fd3")
