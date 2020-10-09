// This file will have conditional statements

// Nested If - Else statements
var temp = 25;

if (temp < 16)
{
    console.log("It's cold outside.");
}
else {
    if ((temp >= 16) && (temp < 26))
    console.log("The temparature outside is moderate");
    else{
        console.log("It's hot outside");
    }
}

// In case for login through different platforms

var email = false
var google = true
var facebook = false
var github = true


// IF anyone of the above values are true, then if will get executed
if (email || google || facebook || github)
    console.log("You are logged in");
else
    console.log("Please LOG IN");
// Every values should be false in order for else to execute


// Ternary Operator

var authenticated = false;

authenticated ? console.log("You are Authenticated") : console.log("You are not authenticated");


// Switch Statement

var admin = 1;
var sub_admin = 2;
var test_prep = 3;
var customer = 4;
var user;

user = admin;

switch(user) {
    case 1:
        console.log("You get full access.");
        break;
    case 2:
        console.log("You get access to create or delete courses.");
        break;
    case 3:
        console.log("You get access to create or delete tests.");
        break;
    case 4:
        console.log("You get access to consume content.");
        break;
    default:
        console.log("Make valid entries");
        break;
}