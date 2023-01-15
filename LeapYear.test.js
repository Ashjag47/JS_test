const isLeapYear = require('./LeapYear');
const isLeapYearArrow = require('./LeapYear');


test('2000 is true', () => {
    expect(isLeapYear(2000)).toBe(true);
 });
 test('Arrow 2000 is true', () => {
    expect(isLeapYearArrow(2000)).toBe(true);
 });
 test('2001 is false', () => {
    expect(isLeapYear(2001)).toBe(false);
 });
 test('Arrow 2001 is false', () => {
    expect(isLeapYearArrow(2001)).toBe(false);
 });
 test('2500 is false', () => {
    expect(isLeapYear(2500)).toBe(false);
 });
 test('Arrow 2500 is false', () => {
    expect(isLeapYearArrow(2500)).toBe(false);
 });

