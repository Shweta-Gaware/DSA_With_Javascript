const occurence = (arr) =>{
    let arrlen = arr.length

    let count = {} 

    for(let i=0; i< arrlen; i++){
        let num  = arr[i]
        count[num] = count[num] ? count[num]+1 : 1
       
    }

    console.log(count)
}
const arr = [1,2,2,3,3, 3, 4,4, 4, 4];
occurence(arr);