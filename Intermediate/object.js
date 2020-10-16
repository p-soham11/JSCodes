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
        console.log("Skill Added");
    },
    showSkills : function() {
        console.log(`${this.name} has ${this.skills.length} skills.`);
    }
}
// '.' operator is used to access the underlying property of object
console.log(`Hello ${person.name}`)
// Another way of accessing the object values
console.log(`Good to see you from ${person["nation"]}`);
console.log(person.showSkills());

// TRICK
console.table(person);