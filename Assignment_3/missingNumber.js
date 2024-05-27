function missingNumber(arr){
    
    let str = arr.length;
    // console.log(str);

    for(let i=0; i<str; i++){
        // console.log(arr[i]);
        if(arr[i] !== i+1)
            {
                return i+1;
            }
    }
     return missingNumber;
}


const arr = [1,2,3,4,6,7,8];
// console.log(missingNumber(arr));
const num = missingNumber(arr);
console.log("The missing number is", num);
