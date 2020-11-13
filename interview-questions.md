# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer: A function allows you to define a behavior of variables and then reuse that same behavior throughout your code.


  --------Researched answer:

  A javascript function is a block of code that is designed to perform a particular task
  it is executed when something invokes it (calls it

  functions are defined either with the function keyword or using fat arrow notation. you can declare variables within the function- these are called LOCAL VARIABLES and can only be accessed within the function. local variables are completed when the function starts, and deleted when it is complete.

  Function parameters are listed inside the parentheses () in the function definition.

  Function arguments are the values received by the function when it is invoked.

  Inside the function, the arguments (the parameters) behave as local variables.



2. What is the difference between .map() and .filter()?

  Your answer: .map is used when you want to do something to every item in an array. .filter is used for when you want to remove some items from the array based on some specific parameter.

  Researched answer:

  They do different things: .filter() returns a subset of the elements from the original array, while .map() produces an array with new, different entries based on the elements in the original array.

  Filter is good for identifying certain items in an array that share a common characteristic.



3. What is the difference between console.log() and return?

  Your answer: console.log() is used when you want to print a message or value to the console. it can be used at any time to print information and see what the code currently delivers.
  return is used inside a function to define what the function will produce. you still have to console.log after a function in order for it to print what the function returns to the console.

  Researched answer:
  the purpose of the return value is to use the function return value like you would use a variable value. console log will just write the argument value on the console- and only in the debugging console (you will not see anything in a browser)

  return also allows you to use the value that is returned in some other part of your program



4. In regards to functions, what is an argument?

  Your answer: an argument is a variable that you pass into a function. it is a placeholder that will then be replaced by whatever variable you want to use

  Researched answer:

  Functions have both parameter and arguments. Parameters are in the furst set of parentheses after the fat arrow. they are the names listed in the function definition.

  Function arguments are the real values passed to (and received by) the function.



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:

  it is the driver's role to try to remember what code they can, and contribute where they need to, but mostly listen to their partners explain and suggest what code to use, how they should be writing & what to write next.

  it is the navigator's role to talk the driver through what code they should be using, catch any mistakes the driver makes, and to look up stuff if they need to & then explain it.  but both the driver and their pair should be working together to talk through the code, the driver is just typing


  Researched answer:

  paired programming is also called "programming out loud." both the driver and navigator must be actively participating or else no benefit can be expected.
  both are expected to keep an active commentary.
  the navigator is focused on overall direction and the driver is typing
  https://www.agilealliance.org/glossary/pairing/



6. What is TDD? Describe the work flow associated with TDD.

  Your answer: Test Driven Development is a part of agile development. its the process of developing a product, and you go back and forth between coding and testing. If you need to add a new feature or something and you add it to the code then you can use TDD to test it as you go and make sure its not creating any bugs

  Researched answer:

  there are 2 simple steps to TDD
  1. introduce a test failure
  2. write minimal code required to pass the testing

  there are a few rules that go along with TDD as well.

  1. You are not allowed to write any production code unless it is to make a failing unit test pass.

  2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.

  3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

  https://www.codementor.io/@copperstarconsulting/test-driven-workflow-in-two-easy-steps-bfjln9sl4


7. What is something we did in class this week you found helpful?  

  Your answer:

  when we did that review of git/github! it was really helpful to actually apply it in context. It was way too confusing on the first day because I felt like there was no context



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Classes

    Classes are templates for Javascript objects
    they are not objects- just templates. You can use a class to create objects
    the keyword 'class' creates a class.
    then, you add a constructor method. if you don't add one then javascript adds an empty constructor method


- React

  React is a JavaScript library for building user interfaces.

  React is used to build single page applications.

  React allows us to create reusable UI components.

  theres a terminal command called create-react-app that allows you to create apps in react

  react's goal is to render HTML in a web page

  you can create components in react, and they are independent/reusable bits of code that serve the same purpose as functions in Javascript. props are arguments passed into react components via HTML attributes

- React State

  React components have a built in state object. the State object is where you store property values that belong to the component. when a state object changes, the component re-renders


- CRUD -
    4 methods of react.
    the methods respectively stand for Create, Render, Update, delete
