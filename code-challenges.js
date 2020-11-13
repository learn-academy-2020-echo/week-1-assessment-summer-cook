// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212
//declare a function that takes a temperature at a variable as argument
// the function will return whether the temperature is below, at, or above boiling point

const boilingPointTest = (temperature) => {
  if (temperature < 212){
    return `${temperature} is below boiling point`
  } else if (temperature > 212) {
    return `${temperature} is above boiling point`
  } else if (temperature === 212) {
    return `${temperature} is at boiling point`
  } else {
    return "something went wrong"
  }
}

console.log(boilingPointTest(temp1))
console.log(boilingPointTest(temp2))
console.log(boilingPointTest(temp3))





// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

for(let i=0; i<myNumbers1.length; i++){
  console.log(myNumbers1[i] * 5)
}




// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//declare a function that takes in an array
const multByFive = (array) => {
  //return each value in the array multiplied by 5
  return array.map(value => value * 5)
}
//log the function and pass in the array
console.log(multByFive(myNumbers2))



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

//declare a function that filters a string to remove the vowels and leave the consonants
//need to turn these strings into arrays to use .filter higher order function
//stringWithVowels1.split("") will turn it into an array
//then need to join the array back together to turn it back into a string after with .join("")
//to test if its a vowel, will need if statement of if string is not equal to a, e, i, o, u, y, A, E, I, O, U, Y

const removeVowels = (array) => {
  // i defined a variable to split the array into one letter strings
  let stringSplitter = array.split("")
  // i defined a variable to use for the filtered array that filters the split strings and only returns the values that are not vowels
  let myFilteredArray = stringSplitter.filter(value => {
    return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "A" && value !== "E" && value !== "I" && value !== "O" && value !== "U"
  })
  // i wrote a return that puts all the filtered non-vowel values that are left back together into one string
  return myFilteredArray.join("")
}

console.log(removeVowels(stringWithVowels1))
console.log(removeVowels(stringWithVowels2))



// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

var notAString1 = true
var notAString2 = 42

const isItAString = (array) => {
  if (typeof array === "string"){
  let stringSplitter = array.split("")
  let myFilteredArray = stringSplitter.filter(value => {
    return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "A" && value !== "E" && value !== "I" && value !== "O" && value !== "U"
  })
  return myFilteredArray.join("")
} else {
  return `"${array}" is not a string!`
  }
}

console.log(isItAString(notAString1))
console.log(isItAString(notAString2))


// this is all the work i originally did on this question & I kept getting more and more confused!!

//  i thought about adding an if statement at the beginning , or the other option was to refactor it and use a for loop to run through the array and
// const removeVowels = (array) => if (array !==) {
//
// } else if{
//
// }{
//   return array.filter(value => {
//     return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "A" && value !== "E" && value !== "I" && value !== "O" && value !== "U"
//   })
// }


// const removeVowels2 = (array) => {
//   let newArray = []
//   for (let i=0; i<array.length; i++){
//     if (typeof array[i] !== "string"){
//       return `${array} is not a string`
//     } else if (typeof array[i]) === "string" {
//       return array.filter(value => {
//         return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "A" && value !== "E" && value !== "I" && value !== "O" && value !== "U"
//     }
//
// console.log(removeVowels2(notAString1))

// const removeVowels2 = (string) => {
//   var stringCheck === typeof string
//   if (stringCheck !== "string" ){
//     return `${string} is not a string`
//   } else {
//
//   }
// }





// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals = [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" }]

//write a function that takes an array as an argument and filters it out to return only the toon objects that have thei "value" in the  set to cats

var catChecker = toonimals.filter(value => value.animal === "cat")
console.log(catChecker)



// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


var animalChecker = toonimals.filter(value => value.animal !== "cat")
console.log(animalChecker)
