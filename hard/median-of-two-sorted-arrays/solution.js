/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const res = [...nums1, ...nums2];
    res.sort((a, b) => a - b);
    let left = 0;
    let right = res.length - 1;
    while (left < right) {
        left++;
        right--;
    }

    return ((res[left] + res[right]) / 2);
};