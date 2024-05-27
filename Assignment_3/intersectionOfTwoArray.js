function intersectionOfTwoArray(arr1, arr2){

    
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;

    let newArr = [];
    
    for(let i=0; i<arr1Len; i++){
        for(let j=0; j<arr2Len; j++){
            if(arr1[i] === arr2[j]){
            newArr.push(arr1[i]);
        }
    }
}
    // console.log(newArr)
    return newArr;
}
let arr1 = [1,2,2,1];
let arr2 = [2,2];
console.log(intersectionOfTwoArray(arr1, arr2));

