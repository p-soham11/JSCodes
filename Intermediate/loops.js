// This file will cover LOOPs in JavaScript


// Writing basic FOR loop statements
for (let i = 0; i < 5; i++) {
    console.log((i+1) * 2);
}
console.log();

// Basic Usecase of loop
console.log("Using FOR Loops : ");
var cities = ["Kolkata", "Delhi", 1917, "Bangalore", "Mumbai", "Hydrabad"]
for(let i = 0; i < cities.length; i++) {
    if(typeof cities[i] !== "string")
        continue;           // It will take the loop to next itteration without executing the following statements
    console.log(cities[i]);
}
console.log();


// Using While Loop
console.log("Using While Loops : ")
let i = 0;
while(i < cities.length) {
    if ( typeof cities[i] === "string") {
        console.log(cities[i]);
    }
    i++;     // Manually incrementing the counter variable
} 
console.log();



// Using DO-While Loops

// This will execute the code atleast once even if the condition is unsatisfied
// It's beacuse it execute the code before checking the condition
console.log("Using Do-While Loops : ")
let i=0;
do{
    if ( typeof cities[i] === "string") {
        console.log(cities[i]);
    }
    i++;    // Incrementing the counter variable   
} while(i < cities.length);