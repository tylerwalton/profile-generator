const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // test description saying this should test if constructor creates and object

  //test for email next
  it("should accept a github argument", () => {
    const exampleGitHub = "t";
    const result = new Engineer("tyler", "1234", "tyler", exampleGitHub);
    expect(result.github).toEqual(exampleGitHub);
  });

  it("getGitHub should return github", () => {
    const exampleGitHub = "t";
    const result = new Engineer("tyler", "1234", "tyler", exampleGitHub);
    expect(result.getGitHub()).toEqual(exampleGitHub);
  });
});
