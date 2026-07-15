function findLargest(arr){
    if (arr.length==0){
        return "array is empty"
    }
    
    
    let largest = arr[0]

    for (let i =1 ;i <arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]

        }
    }
    return largest
}

const arr = [12,34,2,2,11,69,23]
console.log(findLargest(arr))