const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an engineer object with with a Github username and an employeee superclass.", () => {
            const engineer = new Engineer("George", 14, "George@engineerin.com", "georges-github");

            expect(engineer.github).toEqual("georges-github");
            expect(engineer).toBeInstanceOf(Employee);
        });
        it("should throw an error if the 'github' argument is not a string.", () => {
            const engineer = () => new Engineer("George", 9, "George@engineerin.com", 1234);
            const err = new Error("Expected 'Github' to be a string literal.");

            expect(engineer).toThrowError(err);
        });
        it("should throw an error if the 'github' argument is omitted.", () => {
            const engineer = () => new Engineer("George", 9, "George@engineerin.com");
            const err = new Error("Expected 'Github' to be a string literal.");

            expect(engineer).toThrowError(err);
        });
        
    })
})