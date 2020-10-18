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