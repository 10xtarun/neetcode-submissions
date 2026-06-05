class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length == 0) {
            return false
        }
        if(nums.length >= 2 && nums[0] == nums [1]) {
            return true
        }

        const seenSet = new Set()

        for(const num of nums) {
            if(seenSet.has(num)){
                return true
            } else {
                seenSet.add(num)
            }
        }
        return false
    }
}
