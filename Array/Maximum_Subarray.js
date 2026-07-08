let nums = [-2,1,-3,4,-1,2,1,-5,4]

// Step 1: Store arr[0] in variable res because array can contain only one element.
// Step 2: Run two loops to find the sum of all subarays and store the maximum sum in res.
    // Step 1: Compare the Sum with the res and store the maximum value in res.
// Step 3: Return res.

function maximumSubarray(nums){
    let res = nums[0];
    for(let i = 0; i< nums.length; i++){
        let currSum = 0;
        for(let j = i; j< nums.length; j++){
            currSum += nums[j];
            res = Math.max(res, currSum);
        }
    }
    return res;
}

let result = maximumSubarray(nums);
console.log(result); 

// Print the maximum sum of the subarray and the subarray itself.
function printMaximumSubarray(nums) {
    let res = nums[0];
    let start = 0;
    let end = 0;
    let subArray = [];

    for(let i = 0;i<nums.length;i++){
        let currSum = 0;
        for(let j = i;j<nums.length;j++){
            currSum += nums[j];

            if(currSum > res){
                res = currSum;
                start = i;
                end = j;
            }
        }
    }
    for(let i = start;i<=end;i++){
        subArray.push(nums[i]);
    }
    return {res,start, end, subArray};
}

let resultArray = printMaximumSubarray(nums);
console.log(resultArray.subArray);