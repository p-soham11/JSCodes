// This JS file will contain FUNCTIONS

// We use 'function' keyword to define a function
// The below function is taking parameter through 'data'

function sayHello(data) {
    console.log(`Hello ${data}. How are you doing ?`)
    // Return keyword sends back the value and terminates the code
    return "Function executed successfully.";
    // Any statement after return will not execute.
}

var name = "Soham";
var status = sayHello(name);
console.log(status);

// Another way of calling the function and printing directly.
console.log(sayHello(name));