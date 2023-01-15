function replaceNext(word){
    let wordArr = word.split("")
    for(let i=0; i<wordArr.length; i++){
        if(wordArr[i]>='A' && wordArr[i]<='Z'){
            let n = wordArr[i].charCodeAt()-'A'.charCodeAt()
            n=(n+1)%26
            wordArr[i]=String.fromCharCode(n+'A'.charCodeAt())
        }
        else if(wordArr[i]>='a' && wordArr[i]<='z'){
            let n = wordArr[i].charCodeAt()-'a'.charCodeAt()
            n=(n+1)%26
            wordArr[i]=String.fromCharCode(n+'a'.charCodeAt())
        }
    }
    return wordArr.join("")
}

replaceNextArrow = (word) => {
    let wordArr = word.split("")
    for(let i=0; i<wordArr.length; i++){
        if(wordArr[i]>='A' && wordArr[i]<='Z'){
            let n = wordArr[i].charCodeAt()-'A'.charCodeAt()
            n=(n+1)%26
            wordArr[i]=String.fromCharCode(n+'A'.charCodeAt())
        }
        else if(wordArr[i]>='a' && wordArr[i]<='z'){
            let n = wordArr[i].charCodeAt()-'a'.charCodeAt()
            n=(n+1)%26
            wordArr[i]=String.fromCharCode(n+'a'.charCodeAt())
        }
    }
    return wordArr.join("")   
}

module.exports=replaceNext
module.exports=replaceNextArrow

let word="Codeacademy"
console.log(`By regular function: ${replaceNext(word)}`)
console.log(`By Arrow function: ${replaceNextArrow(word)}`)
