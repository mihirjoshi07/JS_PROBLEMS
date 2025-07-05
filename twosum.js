/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
const target = 66;
let result = [];
let temp;
const twoSum = function (nums, target) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
    
};


const ans=twoSum(nums,target);
console.log(ans);