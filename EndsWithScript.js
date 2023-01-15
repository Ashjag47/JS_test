function endsWithScript(word){
    return word.endsWith("Script")
}

endsWithScriptArrow = (word) => {
    return word.endsWith("Script")
}

word = "javascript"
console.log(`By regular function: ${endsWithScript(word)}`)
console.log(`By arrow function: ${endsWithScriptArrow(word)}`)