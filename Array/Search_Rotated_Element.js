let nums = [4,5,6,7,0,1,2];

// Write a function to search the element in the rotated array and return the index of the element.

function searchElement(nums, target){
    let index = -1;
    for(let i = 0;i<nums.length;i++){
        if(nums[i] === target){
            index = i;
            break;
        }
    }
    return index;
}
let index = searchElement(nums, 0);
console.log(index);
function searchElementInRotatedArray(nums, index){
    for(let i = 0;i<index;i++){
        let firstEle = nums[0];
        for(let j = 0;j<nums.length;j++){
            nums[j] = nums[j + 1];
        }
        nums[nums.length-1] = firstEle;
    }
    return nums;
}

let result = searchElementInRotatedArray(nums, index);
console.log(result);