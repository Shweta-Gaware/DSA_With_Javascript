function secondLargestElement(arr){

    let arrlen = arr.length;
    let first = arr[0];
    let second = arr[0];

    for(let i = 0; i<arrlen; i++){
        if(first < arr[i]){
            second = first;
            first = arr[i];
        
        }
        // else if(second < arr[i])
            else if(arr[i]!== first && arr[i] > second)
            {
            second = arr[i];
            console.log("first", first);
            console.log("second", second);

        }
    }
    }
    
var arr = [12,35,1,10,34,1];
console.log(secondLargestElement(arr));