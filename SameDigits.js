function isSameDigits(n){
    n=String(n)
    let len = n.length
    let div = "1".repeat(len)
    //console.log(div)
    if (Number(n)%Number(div)==0){
        return true
    }
    return false
    //return ((Number(n)%Number(div)==0) ? true : false)
}

isSameDigitsArrow = () =>{
    n=String(n)
    let len = n.length
    let div = "1".repeat(len)
    if (Number(n)%Number(div)==0){
        return true
    }
    return false
    //return ((Number(n)%Number(div)==0) ? true : false)
}

module.exports=isSameDigits
module.exports=isSameDigitsArrow

n=23
console.log(`By regular function: ${isSameDigits(n)}`)
console.log(`By Arrow function: ${isSameDigitsArrow(n)}`)