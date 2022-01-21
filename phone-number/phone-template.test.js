import phoneTemplate from "./phone-template";

describe(".phone-template", () => {
 test.each([
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "(123) 456-7890"],
  [[8, 8, 8, 8, 4, 4, 4, 3, 3, 3], "(888) 844-4333"]
 ])("Create phone template from %o", (nums, expectString) => {
  expect(phoneTemplate(nums)).toEqual(expectString);
 });
});
