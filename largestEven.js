//regular function
function largestEven(arr){
    let big=Number.NEGATIVE_INFINITY
    for(let i in arr){
        if(arr[i]%2==0 && arr[i]>big){
            big=arr[i]
        }
    }
    if(big==Number.NEGATIVE_INFINITY){
        return -1
    }
    return big
}

//arrow function
largestEvenArrow = (arr) => {
    let big=Number.NEGATIVE_INFINITY
    for(let i in arr){
        if(arr[i]%2==0 && arr[i]>big){
            big=arr[i]
        }
    }
    if(big==Number.NEGATIVE_INFINITY){
        return -1
    }
    return big   
}
module.exports = largestEven;
module.exports = largestEvenArrow;

let arr=[1, 3, 5, 7]
console.log(`By Regular function: ${largestEven(arr)}`)
console.log(`By Arrow function: ${largestEvenArrow(arr)}`)