const Manager = require ('../lib/Manager');

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Josh", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});
