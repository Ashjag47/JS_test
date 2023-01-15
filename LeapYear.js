function isLeapYear(year) {
    return ((year%4==0) && (year%100!=0) || (year%400==0)) ? true : false
}

isLeapYearArrow = (year) => {
    return ((year%4==0) && (year%100!=0) || (year%400==0)) ? true : false
}

year=2001
console.log(`By Regular function: ${isLeapYear(year)}`)
console.log(`By Arrow function: ${isLeapYearArrow(year)}`)