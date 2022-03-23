const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instanciate an employee object with qualified name, id and email values.", () => {
            const employee = new Employee("John", 6, "john@someemailco.com");
            
            expect(employee.name).toEqual("John");
            expect(employee.id).toEqual(6);
            expect(employee.email).toEqual("john@someemailco.com");
        });
        it("should throw an error if the name argument is not a string.", () => {
            const employee = () => new Employee(1234, 6, "john@someemailco.com");
            const err = new Error("Expected 'Name' to be a string.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if the ID argument is not a number.", () => {
            const employee = () => new Employee("John", "six", "john@someemailco.com");
            const err = new Error("Expected 'ID' to be a number.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if the email argument is not correctly formatted.", () => {
            const employee = () => new Employee("John", 6, "just some words");
            const err = new Error("Expected 'Email' to be a validly formatted email address.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee(6, "john@someemailco.com");
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee("John", "john@someemailco.com");
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee("John", 6);
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee("John");
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee(6);
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee("john@someemailco.com");
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        it("should throw an error if called with fewer than 3 arguments.", () => {
            const employee = () => new Employee();
            const err = new Error("Expected constructor to be called with 'name','id', and 'email.");

            expect(employee).toThrowError(err);
        });
        });
});