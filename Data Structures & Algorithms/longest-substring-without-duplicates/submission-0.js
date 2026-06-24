class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let leftIndex = 0;
        let maxLength = 0;
        let indexLookUpObj = {}; 

        for (let rightIndex = 0; rightIndex < s.length; rightIndex++) {
            let rightChar = s[rightIndex];

            // If the character exists AND its last recorded index is inside our current window
            if (indexLookUpObj[rightChar] !== undefined && indexLookUpObj[rightChar] >= leftIndex) {
                // Instantly jump the left window edge past the old duplicate character
                leftIndex = indexLookUpObj[rightChar] + 1;
            }

            // Record/Update the absolute latest position of this character
            indexLookUpObj[rightChar] = rightIndex;

            // Calculate the current window size and check if it's a new record
            let currentWindowLength = rightIndex - leftIndex + 1;
            maxLength = Math.max(maxLength, currentWindowLength);
        }

        return maxLength;
    }
}