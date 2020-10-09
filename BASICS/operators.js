// This file contains the usecase of Operators in JavaScript

var a = 10;
var b = 25;

// As it is an relational operator, result stores boolean values.
var result = a > b;
console.log(result);    // Output :   false
console.log("Datatype : " + typeof result);

// Calculating Discount

var listPrice = 999;
var sellPrice = 299;

var discountPercent = ( (listPrice - sellPrice) / listPrice) * 100;
console.log("Raw data : " + discountPercent);

// Applying Math function
discountPercent = Math.round(discountPercent);
console.log("MODIFIED : " + discountPercent + "% OFF");


// Picking up a Random number

var min = 20;
var max = 75;

var rand_num = Math.round((Math.random() * (max - min)) + min);
console.log("Random Number : " + rand_num);