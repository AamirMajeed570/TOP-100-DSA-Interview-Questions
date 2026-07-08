const nums = [3,1,2,4];

const target = 6;

function calculateSubarray(nums,target){
    let subarray = []
    let sum = 0;
    let start = -1;
    let end = -1;
    for(let i = 0;i<nums.length;i++){
        for(let j = i;j<nums.length;j++){
            sum += nums[j];
            if(sum === target){
                start = i;
                end = j;
                break;
            }
        }
        
    }

    for(let i = start;i<=end;i++){
        subarray.push(nums[i])
    }
    return subarray;
}

console.log(calculateSubarray(nums,target))