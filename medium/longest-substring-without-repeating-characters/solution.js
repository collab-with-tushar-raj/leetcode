/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0;
    let map = {};
    let longestSubStr = '';
    while (end < s.length) {
        if (map[s[end]] === undefined) {
            map[s[end]] = end;
            end++;
        } else { // handling duplicate scenario
            const newStr = s.slice(start, end);
            if (longestSubStr.length < newStr.length) {
                longestSubStr = newStr;
            }
            start = map[s[end]] + 1;
            end = start;
            map = {};
        }
    }

    const keys = Object.keys(map);
    if (keys.length !== 0 && keys.length > longestSubStr.length) {
        return keys.length;
    }

    return longestSubStr.length;
};