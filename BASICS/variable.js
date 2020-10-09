// Scope of a variable is defined by : 
// 1. var
// 2. let
// 3. const

// const datatype will not allow us to modify the data
// In this case, we cannot change nationality

var name = "Soham Pal";

var age;
age = 19;

const nationality = "Indian";
console.log(name + " is " + nationality);

const isMale = true;     // This is Boolean Value [can be only True/False]
console.log("Is he Male ? " + isMale);  

console.log(5+5);  // Output : 10

console.log(5 + "5");  // Output : 55

// Another way of displaying : 
// This is called template literals.
console.log(`
    ${name} is ${age} years old,
    Who is an ${nationality}.
`) 