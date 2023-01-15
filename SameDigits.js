function isSameDigits(n){
    n=String(n)
    let len = n.length
    let div = "1".repeat(len)
    return (Number(n)%Number(div)==0 ? true : false)
}

isSameDigitsArrow = () =>{
    n=String(n)
    let len = n.length
    let div = "1".repeat(len)
    return (Number(n)%Number(div)==0 ? true : false)
}

n=222222
console.log(`By regular function: ${isSameDigits(n)}`)
console.log(`By Arrow function: ${isSameDigitsArrow(n)}`)