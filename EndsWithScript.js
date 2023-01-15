function endsWithScript(word){
    return word.endsWith("Script")
}

endsWithScriptArrow = (word) => {
    return word.endsWith("Script")
}
module.exports=endsWithScript
module.exports=endsWithScriptArrow

word = "javascript"
console.log(`By Regular function: ${endsWithScript(word)}`)
console.log(`By Arrow function: ${endsWithScriptArrow(word)}`)