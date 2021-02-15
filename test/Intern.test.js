const Intern = require ('../lib/Intern');

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Josh", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
