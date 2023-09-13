const { default: TestRunner } = require("jest-runner");
const addFive = require("./addFive");

test("testing", () => {
  expect(addFive(1)).toBe(6);
});
