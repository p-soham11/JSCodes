// This file contains about the Prototype (__proto__)

var User = function(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.print = function(){
        console.log(`${name} is ${age} years old and lives in ${location}`);
    };
};

// Defining a function for User using proto to access properties
User.prototype.getName = function(){
    console.log(`Hello ${this.name}`);
};


var mike = new User("Mike", 32, "Austin");
mike.getName();
mike.print();