let nums = [4, 5, 6, 7, 0, 1, 2];

// Rotate the array till the minimum element is at the first index and return the minimum element.

function fundMinimum(nums) {
    let ele = nums[0];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < ele) {
            ele = nums[i];
            index = i;
        }
    }
    return index;
}

let index = fundMinimum(nums);
console.log(index);

// Write a function to rotate the array index times.
function rotateArray(nums, index) {
    // let k = index;
    for (let k = 0; k < index; k++) {
        let firstEle = nums[0];
        for (let i = 0; i < nums.length; i++) {
            nums[i] = nums[i + 1];
        }
        nums[nums.length - 1] = firstEle;
    }
    return nums;
}

let rotatedArray = rotateArray(nums, index);
console.log(rotatedArray);