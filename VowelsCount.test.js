const countVowels = require('./VowelsCount');
const countVowelsArrow = require('./VowelsCount');

cases=[
    ["codeacademy",5],
    ["Ashish",2]
]


test.each(cases)(`%s have %d vowels`, (input,output) => {
    expect(countVowels(input)).toBe(output);
 });
test.each(cases)(`(Arrow) %s have %d vowels`, (input,output) => {
    expect(countVowelsArrow(input)).toBe(output);
 });
 

