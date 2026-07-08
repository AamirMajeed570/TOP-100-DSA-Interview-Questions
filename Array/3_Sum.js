let nums = [-1, 0, 1, 2, -1, -4];

function calculateThreeSum(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                console.log(i, j, k)
                if (i !== j && j !== k && i !== k) {
                    const sum = nums[i] + nums[j] + nums[k];
                    if (sum === 0) {
                        result.push([nums[i], nums[j], nums[k]]);
                    }
                }
            }
        }
    }
    return result;
}

console.log(calculateThreeSum(nums))

// const arr =  [1, 4, 45, 6, 10, 8]
// const target = 13;

// function findTriplet(arr, target) {
//     let result = [];
//     for(let i = 0;i<arr.length;i++){
//         for(let j = i+1;j<arr.length;j++){
//             for(let k = j+1;k<arr.length;k++){
//                 const sum = arr[i] + arr[j] + arr[k];
//                 if(sum === target){
//                     result.push([arr[i], arr[j], arr[k]]);
//                 }
//             }
//         }
//     }
//     return result;
// }

// console.log(findTriplet(arr, target))