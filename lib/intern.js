const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);  
        this.school = school;
        if(typeof this.school !== 'string'){ 
            throw new Error("Expected 'School' to be a string literal.");
        }
        
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
    
}

module.exports = Intern;