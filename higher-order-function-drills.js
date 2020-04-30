/* eslint-disable indent */
/* eslint-disable no-console */
'use strict';
console.log('hi');
// Functions as arguments (1)
// Create a function called repeat which takes two arguments:
// The first argument should be an arbitrary function, fn
// The second argument should be a number, n
// repeat should loop n times
// Each iteration of the loop, it should call fn
// Create two more functions called hello and goodbye:
// hello should log the string 'Hello world'
// goodbye should log the string 'Goodbye world'
// Use your repeat function to call the hello function five times: repeat(hello, 5)
// Use your repeat function to call the goodbye function five times: repeat(goodbye, 5)
function repeat(fn, n) {
    for (let i = 1; i <= n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filtered = array.filter((item, index) => {
    return item > 5;                      
 });
 console.log(filtered);

 array.forEach((item, index) => console.log(`Index ${index} is: ${item}`));

//  Functions as arguments (2)
// Let's write our own version of the filter function which is used to create a new array from an old array, but only including elements that meet criteria set in the callback function. The usage is below. Paste this code into your code editor and write your function in the space indicated. Review the code beneath to study how it's meant to be used.

function filter(arr, fn) {
    // TASK: Define your function here
    let newArr = [];
    for (let i=0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

const filteredNamesArrow = filter(myNames, (name) => name[0] === 'R');
console.log(filteredNamesArrow);

console.log(filteredNames); // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES
// Create a function called filter, which takes two arguments:
// First argument is an array: arr
// Second argument is a function: fn
// This function exists to return a new array, so create a newArray initialized to [];
// Now start a loop through the arr passed in
// Inside the loop:
// Write an if statement that checks if invoking the fn function while passing in the current element of arr returns true
// If it does, then push the current element of arr into our newArray
// Finally, outside the loop, we return newArray
// Try calling your filter function using the myNames array above and test that it works
// Bonus credit! Can you invoke the filter function and immediately log the result using a single line of code and arrow functions?

// Functions as return values
// Our task is to create multiple versions of a "hazard alert", which tells you the location of the hazard and how many times that hazard has issued an alert. We're using functions as return values to create closures. Each hazard warning is going to exist in its own closure so we can separately track how many times each warning has been issued.

// Create a hazardWarningCreator function which takes one argument typeOfWarning
// Inside the function, create a warningCounter variable that initializes at 0
// Would a number variable expected to change be let or const?
// Return an anonymous function, which takes one argument location
// Inside the inner function:
// Increment warningCounter
// Answer out loud: Why does the inner function have access to warningCounter? Because of sc--- ch---
// Log out: "DANGER! There is a ${typeOfWarning} hazard at ${location}!"
// Log out the message: "The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!"
// Remember: string interpolation above requires a special character, not ' or "
// Now let's invoke hazardWarningCreator three times, catching the returned function in separate variables, such as:
// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// (you create two more of your choice)
// Finally, invoke each of your newly created hazard warning closures several times at different locations:
// rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

// rocksWarning('Centinela Ave and Olympic Blvd');
// // => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// // => The Rocks on the Road hazard has triggered 2 time(s) today!

// // Invoke the other hazard creators you instantiated, too
// Bonus credit! Can you figure out how to log out "time" for a value of 1 and "times" for a value of 0 or >= 2?

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        if(warningCounter === 1) {
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        } else {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);   
        }
    };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
iceWarning('Main St and Pacific Ave');
iceWarning('Centinela Ave and Olympic Blvd');
rocksWarning('Center St and Oak Ave');
rocksWarning('Mandela Ave and Russell Blvd');

// forEach, filter and map
// A turtle's movements can be represented by an array which looks like this: [3, 4]. The first item in the array represents the number of steps the turtle takes forwards. The second number in the array is the number of steps the turtle takes to the left.
// Here is an array of different movements made by a turtle: [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]].
// Use the filter method to remove any items where the turtle moves backwards or to the right (i.e. where either the first of second number is an item is negative).
// Use the map method to create a new array containing how many steps the turtle makes in total with each movement (i.e. the first and second number added together).
// Use the forEach method to log out how many steps the turtle took in each case.


// reduce
// Use the reduce function to iterate through an array of words and construct a decoded sentence (string) based on the following criteria:
// If the array element is exactly three characters in length, add a space character to your accumulator
// Otherwise, capitalize the LAST character of the array element and add it to your accumulator
// Your input is 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'
// You will need to convert the input to an array before using .reduce()
// HINT: When you invoke reduce() you will need to set the initialValue parameter to an empty string so that future iterations can concatenate more string characters

function decoder(phrase) {
    const arr = phrase.split(' ');
    console.log(arr);
    let newArr = [];
    arr.forEach(item => item.length === 3 ? newArr.push(' '): newArr.push(item.charAt(item.length-1).toUpperCase()));
    console.log(newArr);
    const reducer = (accumulator, item) => {
        return accumulator + item;
    };
    const decoded = newArr.reduce(reducer, '');
    console.log(decoded);
    return decoded;
}

decoder('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');