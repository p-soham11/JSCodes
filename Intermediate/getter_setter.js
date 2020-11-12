// Getter -> access the properties
// Setter -> modify / mutate the properties

const person = {
    firstName: 'Soham',
    lastName: 'Pal',
    age: 19,
    // Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    // Setter
    set fullName(name) {
        const names = name.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

console.log(person.fullName);   // Soham Pal

person.fullName = "Budd Mike";
console.log(person.fullName);   // Budd Mike