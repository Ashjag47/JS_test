function concat(words){
    return (words[0].slice(1)+words[1].slice(1))
}

function concatArrow(words){
    return (words[0].slice(1)+words[1].slice(1))
}

words=["code", "academy"]
console.log(`By regular function: ${concat(words)}`)
console.log(`By Arrow function: ${concatArrow(words)}`)