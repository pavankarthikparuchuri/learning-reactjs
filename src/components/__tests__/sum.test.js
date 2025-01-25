import { sum } from "../sum";

//first parameter would be the description of the test and second parameter would be the call back function.
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
