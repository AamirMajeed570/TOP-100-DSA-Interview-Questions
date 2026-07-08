let nums =  [2,3,-2,4];

function maximumProduct(nums){
    let res = nums[0];
    for(let i = 0;i<nums.length;i++){
        let currProduct = 1;
        for(let j = i;j<nums.length;j++){
            currProduct *= nums[j];
            res = Math.max(res,currProduct);
        }
    }
    return res;
}

let result = maximumProduct(nums);
console.log(result);

// Print the maximum product of the subarray and the subarray itself.
function printMaximumSubarray(nums){
    let res = nums[0];
    let start = 0;
    let end = 0;
    let subArray = [];

    for(let i = 0;i<nums.length;i++){
        let currProduct = 1;
        for(let j = i;j<nums.length;j++){
            currProduct *= nums[j];

            if(currProduct > res) {
                res = currProduct;
                start = i;
                end = j;
            }
        }
    }
    for(let i = start;i<=end;i++){
        subArray.push(nums[i]);
    }
    return subArray;
}

let resultArray = printMaximumSubarray(nums);
console.log(resultArray);