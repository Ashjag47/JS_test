const largestEven = require('./LargestEven');
const largestEvenArrow = require('./LargestEven');


test('[1, 2, 3, 4, 5] is 4', () => {
    expect(largestEven([1,2,3,4,5])).toBe(4);
 });
 test('Arrow [1, 2, 3, 4, 5] is 4', () => {
    expect(largestEvenArrow([1,2,3,4,5])).toBe(4);
 });
 test('[-10, -20, -30, -40, -50] is -10', () => {
    expect(largestEven([-10, -20, -30, -40, -50])).toBe(-10);
 });
 test('Arrow [-10, -20, -30, -40, -50] is -10', () => {
    expect(largestEvenArrow([-10, -20, -30, -40, -50])).toBe(-10);
 });
 test('[1, 3, 5, 7] is -1', () => {
    expect(largestEven([1, 3, 5, 7])).toBe(-1);
 });
 test('Arrow [1, 3, 5, 7] is -1', () => {
    expect(largestEvenArrow([1, 3, 5, 7])).toBe(-1);
 });