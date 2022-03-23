const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an manager object with with a office number and an employeee superclass.", () => {
            const manager = new Manager("James", 21, "James@companyman.com", 126);

            expect(manager.officeNumber).toEqual(126);
            expect(manager).toBeInstanceOf(Employee);
        });
        it("should throw an error if the 'officeNumber' argument is not a number.", () => {
            const manager = () => new Manager("James", 21, "James@companyman.com", "Hello");
            const err = new Error("Expected 'Office Number' to be a number.");

            expect(manager).toThrowError(err);
        });
        it("should throw an error if the 'officeNumber' argument is omitted.", () => {
            const manager = () => new Manager("James", 21, "James@companyman.com");
            const err = new Error("Expected 'Office Number' to be a number.");

            expect(manager).toThrowError(err);
        });
        
    })
})