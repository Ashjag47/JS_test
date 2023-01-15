function longestWord(words) {
    long=-1
    for(i in words){
        if (words[i].length>long){
            long=words[i].length
            idx=i
        }
    }
    return words[idx]
}

longestWordArrow = (words) => {
    long=-1
    for(i in words){
        if (words[i].length>long){
            long=words[i].length
            idx=i
        }
    }
    return words[idx]
}

module.exports = longestWord;
module.exports = longestWordArrow;

let words= ["we", "love", "code", "academy"]
console.log(`By Regular function: ${longestWord}`)
console.log(`By Arrow function: ${longestWordArrow}`)