function countVowels (word){
    vowels = ['a','e','i','o','u']
    word=word.toLowerCase()
    count=0
    for(i in word){
        vowels.includes(word[i]) ? count+=1 : count
    }
    return count
}

countVowelsArrow = (word) => {
    vowels = ['a','e','i','o','u']
    word=word.toLowerCase()
    count=0
    for(i in word){
        vowels.includes(word[i]) ? count+=1 : count
    }
    return count   
}

word="codeAcademy"
console.log(`By regular function: ${countVowels(word)}`)
console.log(`By Arrow function: ${countVowelsArrow(word)}`)