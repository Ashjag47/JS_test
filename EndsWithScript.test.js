const endsWithScript = require('./EndsWithScript');
const endsWithScriptArrow = require('./EndsWithScript');

cases=[
    ["javaScript",true],
    ["javascript",false],
    ["Scrip",false]
]


test.each(cases)(`%s -> %s`, (input,output) => {
    expect(endsWithScript(input)).toBe(output);
 });
test.each(cases)(`Arrow %s -> %s`, (input,output) => {
    expect(endsWithScriptArrow(input)).toBe(output);
 });
 

