let nums = [10, 6, 5, 8];
let newArr = [];

function loneleyElements(nums) {
    for (let i = 0; i < nums.length; i++) {
        if(!nums.includes(nums[i]+1) && !nums.includes(nums[i]-1)){
            newArr.push(nums[i]);
        }
    }
    return newArr;
}

let result = loneleyElements(nums);
console.log(result);