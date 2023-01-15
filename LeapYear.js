function isLeapYear(year) {
    return ((year%4==0) && (year%100!=0) || (year%400==0)) ? true : false
}

isLeapYearArrow = (year) => {
    return ((year%4==0) && (year%100!=0) || (year%400==0)) ? true : false
}

module.exports=isLeapYear;
module.exports=isLeapYearArrow;

year=2000
console.log(`By Regular function: ${isLeapYear(year)}`)
console.log(`By Arrow function: ${isLeapYearArrow(year)}`)