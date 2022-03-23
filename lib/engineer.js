const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);  
        this.github = github;
        if(typeof this.github !== 'string'){ 
            throw new Error("Expected 'Github' to be a string literal.");
        }
        
    }

    getGithub() {
        return this.getGithub;
    }

    getRole() {
        return "Engineer";
    }
    
}

module.exports = Engineer;