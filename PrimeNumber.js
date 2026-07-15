function prime(num){
    if (num<=1){
        return "nor prime nor composite"
    }
    for (let i=2;i<num;i++){
        if(num%i==0){
            return "composite"         
        }
    }
    return "prime"
        
}

const num = 11
console.log(prime(num))
