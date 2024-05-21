function revrseArray(array){

    const reverseArray = [];
    let len = array.length;
    console.log(len);

    for( let i=len-1 ; i>=0 ; i--){
        reverseArray.push(array[i]);
        // console.log(reverseArray);
    }
    return reverseArray;
    
}
const array = [1,2,3,4,5];
const reverseNumber = revrseArray(array);
console.log(reverseNumber);