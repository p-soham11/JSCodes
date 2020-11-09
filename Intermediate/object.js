// This will have codes related to OBJECTS

// Everything inside the object is a key value pair
var person = {
    name : "Soham",
    age : 20,
    phNo : 1234567890,
    city : "Kolkata",
    nation : "India",
    hasGithub : true,
    skills : [],
    addSkill : function(skill) {
        this.skills.push(skill);
        return("Skill Added");
    },
    showSkills : function() {
        return(`${this.name} has ${this.skills.length} skills.`);
    }
}
// '.' operator is used to access the underlying property of object
console.log(`Hello ${person.name}`)
// Another way of accessing the object values
console.log(`Good to see you from ${person["nation"]}`);
console.log(person.showSkills());

// TRICK
console.table(person);


// Functional Way of declaring an object

var User = function(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.print = function(){
        console.log(`${name} is ${age} years old and lives in ${location}`);
    };
};

// NEW Keyword is used to create the object
// Here instance of User is made which contains different objects
var budd = new User("Budd", 21, "Amsterdam");

console.log(budd);