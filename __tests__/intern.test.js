const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an intern object with with a School name and an employeee superclass.", () => {
            const intern = new Intern("Mary", 9, "Mary@gatech.edu", "Georgia Tech");

            expect(intern.school).toEqual("Georgia Tech");
            expect(intern).toBeInstanceOf(Employee);
        });
        it("should throw an error if the 'school' argument is not a string.", () => {
            const intern = () => new Intern("Mary", 9, "Mary@gatech.edu", 1234);
            const err = new Error("Expected 'School' to be a string literal.");

            expect(intern).toThrowError(err);
        });
        it("should throw an error if the 'school' argument is omitted.", () => {
            const intern = () => new Intern("Mary", 9, "Mary@gatech.edu");
            const err = new Error("Expected 'School' to be a string literal.");

            expect(intern).toThrowError(err);
        });
        
    })
})