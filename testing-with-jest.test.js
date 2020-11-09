// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe("addThemUp", () => {
  test("returns the sum of two numbers added", () => {
    expect(addThemUp(10, 5)).toEqual(15)
  })
})
//
//
//
// // --------------------1b) See the test fail. THEN write the code to make the test pass.
// // failed test - command yarn jest in terminal to make the test run
// // FAIL  ./testing-with-jest.test.js
// //  addThemUp
// //    ✕ returns the sum of two numbers added (1 ms)
// //
// //  ● addThemUp › returns the sum of two numbers added
// //
// //    ReferenceError: addThemUp is not defined
// //
// //      11 | describe("addThemUp", () => {
// //      12 |   test("returns the sum of two numbers added", () => {
// //    > 13 |     expect(addThemUp()).toEqual("sum")
// //         |     ^
// //      14 |   })
// //      15 | })
// //      16 |
// //
// //      at Object.<anonymous> (testing-with-jest.test.js:13:5)
// //
// // Test Suites: 1 failed, 1 total
// // Tests:       1 failed, 1 total
// // Snapshots:   0 total
// // Time:        1.027 s
// // Ran all test suites.
// // error Command failed with exit code 1.
// // info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
// // learnacademy@LEARNs-Air week-1-assessment-summer-cook %
//

let num1 = 10
let num2 = 5

const addThemUp = (num1, num2) => {
  return num1 + num2
}

// PASS  ./testing-with-jest.test.js
//  addThemUp
//    ✓ returns the sum of two numbers added (2 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.984 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.84s.
// learnacademy@LEARNs-Air week-1-assessment-summer-cook %


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe("triangleArea", () => {
  test("takes in the base and height as arguments, multiplies the base * height, divides that by 2 and returns the area of a triangle", () => {
    expect(triangleArea(base, height)).toEqual(area)
  })
})



// --------------------2b) See the test fail. THEN write the code to make the test pass.

let base = 1
let height = 2
let area = (base * height) / 2

const triangleArea = () => {
  return (base * height)/2
}
