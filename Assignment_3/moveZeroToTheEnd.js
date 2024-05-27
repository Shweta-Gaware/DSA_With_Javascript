// function moveZeroToTheEnd(arr) {
//     let i = 0;
//     let j = arr.length - 1;
  
//     while (j > i) {
//       if (arr[i] === 0) {
//         // swapping the numbers --->
//         let last = arr[j];
//         arr[j] = arr[i];
//         arr[i] = last;
//         j--;
//       } else {
//         i++;
//       }
//     }
  
//     return;
//   }
  
//   let arr = [1, 2, 0, 7, 9, 0, 3, 0];
//   console.log("moveZeroToTheEnd", arr);

// const moveZeros(arr) {
//     const newArray = [];
//     const allZeros = [];
//     for(i=0; i < arr.length; i++){
//         if(arr[i] >= 1){
//           newArray.push(arr[i]);
//       }else{
//         allZeros.push(arr[i])
//       }
//     }
//     return newArray.concat(allZeros);
//   }

//   const arr = [1, 3, 5, 0, 7, 0];;
// //   moveZeros(arr);
// //   const zeros = moveZeros(arr);
//   console.log(zeros);

function moveZeroToTheEnd(){

    let numArr = [];
    let zerArr = [];

    let arrLen = arr.length;

    for(let i=0; i<arrLen; i++){
        if(arr[i]>=1){
            numArr.push(arr[i])
        }else{
            zerArr.push(arr[i])
        }
    }
   return numArr.concat(zerArr);
}
var arr = [0,1,9,8,4,0,0,2,7,0,6,0,9];
console.log(moveZeroToTheEnd(arr))