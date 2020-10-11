// This file will contain the concepts of hoisting.

/*
    Definition : A variable can be declared after it has been used
    
        IMPORTANT : 
    1. Function declaration are scanned and made available
    2. Variable declaration are scanned and made undefined
*/

tipper("480");

function tipper(cost) {
    var bill = parseFloat(cost) + 20;       // parseInt converts the String to Int value.
    console.log(`You paid Rs.${bill}`);
}
// JS has already scanned and made the function available

//      NOTE :
/*
    double("256");
    The snippet below is a variable function.
    So, If we call 'double' before declaration, it will give an error
    ERROR Message : 'double' is not a function.
    REASON : double was just treated as variable and was made undefined.
*/
var double = function (num) {
    var result = parseInt(num) * 2;
    console.log(`Double : ${result}`);
}

double("256");

//    Another Example :  
console.log(digit);     // OUTPUT : undefined
var digit = 9;      
// REASON: digit initialized after console.log


//  Scope of Variable

var name = "Soham";
console.log(`Hello ${name}`);

function namaste() {
    var name = "Mr. Budd";
    console.log(`Namaste ${name}`);
}

namaste();
console.log(`Hello ${name}`);
