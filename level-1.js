// question 1  Declare and initialise a variable with a string value.
//

var pet = "snake";

// question 2  Create an object variable called person and give it two properties (a key and a value) of your choice.
//

var person = {
  name: "Steven",
  age: "64",
};

// question 3  Create a variable called outOfStock and assign it a boolean value.
//Create an if else statement that checks the value of outOfStock.
//If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 4
// Create an array of five numbers.  Loop through the array and console log each value.

var numberArray = [1, 3, 5, 8, 13];
for (var i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// question 5
//Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var i = 15; i <= 25; i++) {
  console.log(i);
}

// question 6
//Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log(i);
  }
}
// question 7
//Create an array of two objects. Each object must have the same three properties (with different values):
//one property with a string value
//one property with a number value
//one property with a boolean value
//Loop through the array and console log the number value and the boolean value.
var listOfDogs = [
  {
    breed: "Dolmatino",
    age: 5,
    male: true,
  },

  {
    breed: "Pug",
    age: 11,
    male: false,
  },
];

for (var i = 0; i < listOfDogs.length; i++) {
  console.log(listOfDogs[i].age);
  console.log(listOfDogs[i].male);
}

// question 8
//Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
//Inside the function, log the string "I don't like " together with the argument.
//Call the function and pass in a value of your choice.
function whatIDontLike(thing) {
  console.log("I don't like " + thing);
}

//in console I should enter: whatIDontLike("mosquitos");

// question 9

function subtraction(firstNumber, secondNumber) {
  var sum = secondNumber - firstNumber;
  console.log(sum);
}
subtraction(1, 39);

// question 10
//Create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array.
//Call the function and pass in a value of any type.

var shoeBrands = [];

function addShoeBrands(brand) {
  shoeBrands.push(brand);
}
// Testing this function:
addShoeBrands("Converse");
console.log(shoeBrands);
