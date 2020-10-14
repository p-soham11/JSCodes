// This file contains Array in JS

// Declaring an Empty Array
var countries = [];
var arr = new Array(10)  // Creates an array with 10 empty elements

// Array Initialisation
countries = ["India", "Germany", "Portugal", "Spain"];
console.log(`Countries : ${countries}`);
// Another way to Initialise array
var random = new Array("Soham", 18, "Budd", true, 11)
console.log(`Random Array : ${random}`);    // Prints the entire array

// Inserting Element at the end of an array
// 'push' adds an element at the end of an array
random.push("Memories");
console.log(random);
console.log();

// Deleting Element from the end of an Array
// 'pop' deletes the last element of the array
// 'pop' function doesnot accept any parameters
countries.pop();
console.log(`Countries : ${countries}`);     // "Spain" has been removed


// Inserting elements at the beginning of an array
countries.unshift("USA");
console.log(`Countries : ${countries}`);    // Inserts "USA" at the beginning of the array

// Deleting elements from the beginning of an array
countries.shift();
console.log(`Countries : ${countries}`);    // Deletes "USA" from the front