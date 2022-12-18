const Intern = require("../lib/Intern");

describe("Intern", () => {
  // test description saying this should test if constructor creates and object

  it("should accept a school argument", () => {
    const exampleSchool = "t";
    const result = new Intern("tyler", "1234", "tyler", exampleSchool);
    expect(result.school).toEqual(exampleSchool);
  });

  it("getGitHub should return school", () => {
    const exampleSchool = "t";
    const result = new Intern("tyler", "1234", "tyler", exampleSchool);
    expect(result.getSchool()).toEqual(exampleSchool);
  });
});
