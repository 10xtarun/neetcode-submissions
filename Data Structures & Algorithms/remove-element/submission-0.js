class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0
        for(let index=0; index < nums.length; index++) {
            if(nums[index] != val) {
                nums[k] = nums[index]
                k++
            }
        }

        return k
    }
}
