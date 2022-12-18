const Manager = require("../lib/Manager");

describe("Manager", () => {
  // test description saying this should test if constructor creates and object

  it("should accept an office number for the manager", () => {
    const exampleOfficeNumber = "t";
    const result = new Manager("tyler", "1234", "tyler", exampleOfficeNumber);
    expect(result.officeNumber).toEqual(exampleOfficeNumber);
  });

  it("getOfficeNumber should return officeNumber", () => {
    const exampleOfficeNumber = "t";
    const result = new Manager("tyler", "1234", "tyler", exampleOfficeNumber);
    expect(result.getOfficeNumber()).toEqual(exampleOfficeNumber);
  });
});
