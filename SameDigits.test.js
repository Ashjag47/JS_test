const isSameDigits = require('./SameDigits');
const isSameDigitsArrow = require('./SameDigits');

cases=[
    [22,true],
    [23,false],
    [111,true]
]


test.each(cases)(`%d => %p`, (input,output) => {
    expect(isSameDigits(input)).toBe(output);
 });
test.each(cases)(`(Arrow) %d => %p`, (input,output) => {
    expect(isSameDigitsArrow(input)).toBe(output);
 });
 

