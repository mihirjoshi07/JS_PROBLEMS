/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const len_last_word=s.split(" ");
    const filter=len_last_word.filter((item)=> item!="")
    let index= filter.length-1;
    return filter[index].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));