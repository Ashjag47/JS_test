//regular function
function largestEven(arr){
    let big=-1
    for(let i in arr){
        if(arr[i]%2==0 && arr[i]>big){
            big=arr[i]
        }
    }
    return big
}

//arrow function
largestEvenArrow = () => {
    let big=-1
    for(let i in arr){
        if(arr[i]%2==0 && arr[i]>big){
            big=arr[i]
        }
    }
    return big   
}

let arr=[1, 3, 5]
console.log(`By regular function: ${largestEven(arr)}`)
console.log(`By Arrow function: ${largestEvenArrow(arr)}`)