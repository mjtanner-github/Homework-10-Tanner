const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);  
        this.officeNumber = officeNumber;
        if(isNaN(+this.officeNumber)){ 
            throw new Error("Expected 'Office Number' to be a number.");
        }   
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
    
}

module.exports = Manager;