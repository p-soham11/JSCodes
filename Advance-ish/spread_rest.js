// We are gonna learn about Spread and Rest operator

function sum(a, b, c){
    return a+b+c;
}

const arr = [2, 3, 5,];

console.log(sum(arr));  // Showing Undesired result
// Here the function is expecting 3 variables, while we are passing an array
// SPREAD Operator
console.log(sum(...arr));   // Output: 10
// This converts the array into variables



// Scenario: We donot know how many variables will be added
function addAll(...data) {      // REST Operator
// We are taking as many values as the user is passing
// Rest Operator converts the indivisual values into arrays
    
    console.log(data);  // Output will be an array
    let result = 0;
    for (const i of data) {     // 'i' iterates through all values in data
        result += i;
    }
    return result;
}
console.log(`Addition : ${addAll(12, 45, 6, 35, 8, 15, 7)}`);


// EXERCISE
// Scenario : We will multiply first two elements and add the rest

function exercise(a, b, ...values){
// Here, REST operator will ignore the first two values
    console.log(`
    We will multiply ${a} and ${b}
    Summation: ${values}
    `);
    let add = 0;
    const mult = a*b;
    values.forEach(i => {
        add += i;
    });
    return [mult, add];
}
const [multiply, addition] = exercise(12, 6, 45, 15, 10, 30);
console.log(`Multiplication : ${multiply}
Addition : ${addition}`);