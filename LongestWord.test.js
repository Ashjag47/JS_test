const longestWord = require('./LongestWord');
const longestWordArrow = require('./LongestWord');

cases=[
    [["we", "love", "code", "academy"],"academy"],
    [["ash","Ashi","jag"],"Ashi"],
    [[""],'']
]


test.each(cases)(`longest word in %p is %s`, (input,output) => {
    expect(longestWord(input)).toBe(output);
 });
test.each(cases)(`(Arrow) longest word in %p is %s`, (input,output) => {
    expect(longestWordArrow(input)).toBe(output);
 });
 

