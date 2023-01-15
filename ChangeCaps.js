function changeCaps(text){
    let newText = ""
    for(i in text){
        if(text[i]>='A' && text[i]<='Z'){
            newText+=text[i].toLowerCase()
        }
        else if(text[i]>='a' && text[i]<='z'){
            newText+=text[i].toUpperCase()
        }       
    }
    return newText
}

changeCapsArrow = (text) => {
    let newText = ""
    for(i in text){
        if(text[i]>='A' && text[i]<='Z'){
            newText+=text[i].toLowerCase()
        }
        else if(text[i]>='a' && text[i]<='z'){
            newText+=text[i].toUpperCase()
        }       
    }
    return newText
}

text="AsHishP"
console.log(`By regular function: ${changeCaps(text)}`)
console.log(`By Arrow function: ${changeCapsArrow(text)}`)