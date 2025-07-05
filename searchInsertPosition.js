/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let low=0;
  let high=nums.length-1;
  let mid=Math.floor(high/2);
  while(low <= high)
  {
    if(nums[mid]==target){
        flag=true;
        return mid
    }
    else if(nums[mid] > target)
    {
        high=mid-1;
        mid=Math.floor((low+high)/2);
    }
    else if(nums[mid] < target)
    {
        low=mid+1;
        mid=Math.floor((low+high)/2);
    }
  }
   return low;
};

console.log(searchInsert([20,25,30,35,40,45,50,55,60,65],54));


