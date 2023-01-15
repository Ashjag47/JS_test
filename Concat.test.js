const concat = require('./Concat');
const concatArrow = require('./Concat');

cases=[
    [["code", "academy"],"odecademy"],
    [["ash","jag"],"shag"],
    [['sa','j'],"a"]
]


test.each(cases)(`concat of %p is %s`, (input,output) => {
    expect(concat(input)).toBe(output);
 });
test.each(cases)(`(Arrow) concat of %p is %s`, (input,output) => {
    expect(concatArrow(input)).toBe(output);
 });
 

