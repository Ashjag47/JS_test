const replaceNext = require('./ReplaceNext');
const replaceNextArrow = require('./ReplaceNext');

cases=[
    ["codeacademy","dpefbdbefnz"],
    ["lazyinterns","mbazjoufsot"]
]


test.each(cases)(`ans of %s is %s`, (input,output) => {
    expect(replaceNext(input)).toBe(output);
 });
test.each(cases)(`(Arrow) ans of %s is %s`, (input,output) => {
    expect(replaceNextArrow(input)).toBe(output);
 });
 

