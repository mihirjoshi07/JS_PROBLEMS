/**
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = strs[0];
    let commonP = ""
    for (item of strs) {
        commonP=""
        for (i = 0; i < item.length; i++) {
            if (common[i] == item[i]) {
                commonP += item[i];
            } 
            else
                break;
        }
        common=commonP;
    }
    return common;
}

console.log(longestCommonPrefix(["cir", "car"]));


