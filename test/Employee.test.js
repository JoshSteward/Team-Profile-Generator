const Employee = require('../lib/Employee');

test("Can set name via constructor arguments", () => {
    const name = "Josh";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Josh", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Josh", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testValue = "Josh";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Josh", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Josh", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Josh", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("getId() should return \"1\"", () => {
    const testValue = 1;
    const e = new Employee("Josh", 1, "test@test.com");
    expect(e.getId()).toBe(testValue);
  });
  
  test("getEmail() should return \"test@test.com\"", () => {
    const testValue = "test@test.com";
    const e = new Employee("Josh", 1, "test@test.com");
    expect(e.getEmail()).toBe(testValue);
  });

  test("getName() should return \"Josh\"", () => {
    const testValue = "Josh";
    const e = new Employee("Josh", 1, "test@test.com");
    expect(e.getName()).toBe(testValue);
  });
  