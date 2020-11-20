// We will discuss about de-structuring

const person = ["Soham", 18, "Male", "Student Developer"]

// Short Hand Notation
var [name, age, sex, role] = person;

console.log(`
Hello ${name} (${role})
You are ${age} years old ${sex}
`);


// Object De-Structuring

const user = {
    alias : "Budd",
    status : "Single"
};

// The names should match the object  
// The order will not matter, but the variable name should be the same
const {status, alias} = user;

console.log(`Hello ${alias}`);