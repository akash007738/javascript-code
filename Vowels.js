// function vow(str){
   
//     let count = 0 
//     for(let char of str.toLowerCase()){
//         if("aeiou".includes(char)){
//             count++
//         }
//     }return count

// }
// console.log(vow("akasheiuy"))

function vow(){

let str = "akasheutt"
    let vow = ["a","e","i","o","u"]

    let count = 0

    for (let i =0; i<str.length;i++){
        if (vow.includes(str[i])){
            count++
        }
    }return count;
}
console.log(vow())