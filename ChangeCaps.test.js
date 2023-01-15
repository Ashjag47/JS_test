const changeCaps = require('./ChangeCaps');
const changeCapsArrow = require('./ChangeCaps');

cases=[
    ["MeRRy hAD a LITTle lAMp","mErrY Had A littLE LamP"],
    ["A S H i s h","a s h I S H"]
]


test.each(cases)(`toggle case of %s is %s`, (input,output) => {
    expect(changeCaps(input)).toBe(output);
 });
test.each(cases)(`(Arrow) toggle case of %s is %s`, (input,output) => {
    expect(changeCapsArrow(input)).toBe(output);
 });
 

