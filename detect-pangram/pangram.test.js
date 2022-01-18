import pangram from "./pangram";
describe("Detect pangram", () => {
 test.each([
  ["Green", false],
  ["The quick brown fox jumps over the lazy dog", true]
 ])("Test phrase %s is pangram: %s", (phrase, is) => {
  expect(pangram(phrase)).toEqual(is)
 })
})
