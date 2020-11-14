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


// Another Example : 

/* 
Define a function that can answer the role of a user.
A user can be on the following roles :
    admin - with all access
    subadmin - with access to create or delete courses
    testprep - with access to create or delete tests
    user - consume all content
    other - trial user

Name and Role will be given by user.
*/

function getUserRole(name, role) {

    switch(role) {
        case "admin":
            return `${name} is an admin with all access.`;
        case "subadmin":
            return `${name} is sub-admin with access to create or delete courses.`;
        case "testprep":
            return `${name} is test-prep with access to create or delete tests.`;
        case "user":
            return `${name} is an user who can consume all contents.`;
        default:
            return `Hello ${name}. Let's start your trial ;)`;
    }
}

var access = getUserRole("Soham", "user");
console.log(access);



// Self Executing Anonymous Function
// This function has no name and doesnot need any function call staement
(function (){
    console.log("Hello from Annonymous Function 😂");
})();