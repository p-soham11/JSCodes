// In this file, we will learn about closure
// Closure is involved in Redux for state management

function Add(x){
    return function(y){
        return x+y;
    };
}

var value = Add(6);     // x = 6
console.log(value(3));  // y = 3
// SO Output : 9


// Another Way :
console.log(Add(5)(10));    // x = 5  AND  y = 10
