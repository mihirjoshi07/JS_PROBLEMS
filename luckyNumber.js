/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
const numFrequency={}

for(num of arr)
{
    if(numFrequency[num])
        numFrequency[num]++
    else
        numFrequency[num]=1
}
let result=-1;

Object.entries(numFrequency).forEach(([key,value])=>{
    if(key==value)
        result=Math.max(result,key);
})
return result;
};