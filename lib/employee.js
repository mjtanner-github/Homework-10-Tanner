class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        if(!(this.name && this.id && this.email)){ 
            throw new Error("Expected constructor to be called with 'name','id', and 'email.");
        }
        if(typeof this.name !== 'string'){ 
            throw new Error("Expected 'Name' to be a string.");
        }
        if(isNaN(+this.id)){ 
            throw new Error("Expected 'ID' to be a number.");
        }
        //Citation: https://stackoverflow.com/questions/16424659/check-if-a-string-contains-an-email-address
        let email_format = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        if(!(email_format.test(this.email))){
            throw new Error("Expected 'Email' to be a validly formatted email address.");
        }
      
    }
    
    getName() {
        return this.name;
    }
    
    getId() {
        return this.id;
    }
    
    getEmail() {
        return this.email;
    }
    
    getRole() {
        return "Employee";
    }
  }
  
  module.exports = Employee;