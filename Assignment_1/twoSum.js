var twoSum = function (nums, target) {
    for(i=0; i<=nums.length; i++){
        for(j=i+1; j<=nums.length; j++){
            var twoSum = Number(nums[i] + nums[j]);
            if(twoSum === target){
                return[i,j]
            }
        }
    
    }
    };

    let nums = [2, 8, 30, 55];
    let target = 38;

    let result  = twoSum(nums, target);
    console.log(result);