// Using map, we can store values in KEY-VALUE pairs
// For Example :  Dictionaries in Python

var myMap = new Map();

myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");

console.log(myMap);


// Using For-of loop 
// Usually For-of loop returns KEYS first, then VALUES
// Changing to myMap.values() will give us the values
for( let abc of myMap.keys()) {
    console.log(`The Key is ${abc}`);
}

// Another Example 
for( let [abc, xyz] of myMap){
    console.log(`The Key is ${abc} and the Value is ${xyz}`)
}

// Using forEach Loop
// This returns VALUES first followed by KEYS
myMap.forEach( (abc, xyz) => console.log(`Value is ${abc} and Key is ${xyz}`));

// For Deleting
myMap.delete(4);    // This will delete the Value with Key = 4
console.log(myMap);