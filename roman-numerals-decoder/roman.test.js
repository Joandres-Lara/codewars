import roman from "./roman";

describe("Roman numerals decoder", () => {
 test.each([
  [10, "X"],
  [1, "I"],
  [4, "IV"],
  [5, "V"],
  [9, "IX"],
  [15, "XV"],
  [40, "XL"],
  [49, "IXXL"],
  [55, "LV"],
  [90, "XC"],
  [99, "IXXC"],
  [999, "IXXCCM"],
  [1000, "M"],
  [1999, "IXXCCMM"]
 ])("Output: %d of Roman: %s", (expect_number, roman_str) => {
  expect(roman(roman_str)).toEqual(expect_number);
 })
});
