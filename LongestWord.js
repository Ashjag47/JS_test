function longestWord(words) {
    long=0
    for(i in words){
        long = words[i].length>long ? (words[i].length , idx=i) : long
    }
    return idx
}

longestWordArrow = (words) => {
    long=0
    for(i in words){
        long = words[i].length>long ? (words[i].length , idx=i) : long
    }
    return idx
}

let words= ["we", "love", "code", "academy"]
console.log(`By regular function: ${words[longestWord(words)]}`)
console.log(`By Arrow function: ${words[longestWordArrow(words)]}`)