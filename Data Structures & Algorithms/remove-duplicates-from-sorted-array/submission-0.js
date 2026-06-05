class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
       if(nums.length == 0) return 0;

       let left = 1;

       for(let right = 1; right < nums.length; right++){
        if(nums[right] !== nums[right - 1]){
            nums[left] = nums[right]
            left++
        }
       }
       return left
    }
}
