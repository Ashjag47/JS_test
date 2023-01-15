function changeCaps(text){
    let newText = ""
    for(i in text){
        if(text[i]>='A' && text[i]<='Z'){
            newText+=text[i].toLowerCase()
        }
        else if(text[i]>='a' && text[i]<='z'){
            newText+=text[i].toUpperCase()
        }   
        else{
            newText+=text[i]
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
        else{
            newText+=text[i]
        }       
    }
    return newText
}

module.exports=changeCaps
module.exports=changeCapsArrow

text="MeRRy hAD a LITTle lAMp"
console.log(`By regular function: ${changeCaps(text)}`)
console.log(`By Arrow function: ${changeCapsArrow(text)}`)