function digit(num, kaushik)
{
    // console.log(kaushik);
    
    num = Math.abs(num)

    if (num===0){
        return 1
    }
    let count=0

    while (num!==0)
    {
        count++
        num=Math.floor(num/10)
        console.log("Num ", num);
        
    }
return count
}
const num=703925
const totalNum = digit(num);
console.log(totalNum)