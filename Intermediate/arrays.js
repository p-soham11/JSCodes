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

// We can also change the elements directly using index numbers
countries[1] = "Japan";

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


// We can also get to know the index of elements
console.log(countries.indexOf("India"));    // India is in 0th Index
// If the element is not present in the array, it returns -1 value


// Application

if(countries.indexOf("Mexico") >= 0)
    console.log("Mexico is Present.");
else
    console.log("Mexico is NOT Present.")


// 'Fill' in Array

var testArray = [2,4,6,8,10,12,14,16,18];
console.log(testArray.fill("X",2,6));
// Replaces the array elements with 'X' from index 2 to less than 6
// If we just pass "X" without index values, it will fill entire array with "X"

//  EXTRA
var isEven = (data) => {       // Implementing arrow function
    return data % 2 === 0;
}
// It's passing the reference of isEven
// 'result' will be true only if all the conditions return true
// TRY changing any number an odd
// 'every' keyword loops through each element of the array
var result = [2,4,6,8].every(isEven);
console.log(result);


// Callback Function

// Notice we are not using return here
// Using return will require '{ }'
var output = [2,8,12,65].every((data) => data % 2 === 0);
console.log(output);