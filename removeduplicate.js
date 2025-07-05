

  var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // pointer for the position of the last unique element

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]; // overwrite next unique value
        }
    }

    return i + 1; // count of unique elements
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))