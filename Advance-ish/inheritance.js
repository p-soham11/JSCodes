// In this file, we will discuss about Inheritance

// Creating Class User
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    
    // This is a private property
    #courseList = [];
    
    getInfo(){
        return {name: this.name, email: this.email};
    }
    // Working as Setter
    enrollCourse(name){
        this.#courseList.push(name);
    }
    // Working as getter
    getCourseList(){
        return this.#courseList;
    }
    login(){
        return "You are Logged In ✌"
    }
    // Static defines private property, no child can access this
    static personal(){
        return "Hello from USER :)";
    }
}

// Making object of Class User
const budd = new User("Buddy 😉", "budd@xyz.com")
console.log(budd.getInfo());
console.log(budd.login());

// Creating Class Subadmin which inherits the properties of User
// Inheritance is done using 'extends' keyword
class subAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return " I am Sub-Admin";
    }
    personal(){
        return "Hello from Sub-Admin";
    }
    login(){
        return "You are Logged In as Sun-Admin ✌"
    }
}

// Creating object of subAdmin class
const soham = new subAdmin("Soham", "p-soham11@github.com");
soham.enrollCourse("JavaScript Course");
soham.enrollCourse("MERN Bootcamp");
// console.log(soham.courseList)  =>  Output: undefined
console.log(soham.getInfo())
console.log(soham.login())
console.log(soham.getAdminInfo())
console.log(soham.personal())
console.log(soham.getCourseList())