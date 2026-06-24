class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sanitizedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let stringLength = sanitizedString.length
        let isPalFlag = true

        for(let index = 0; index < stringLength / 2 ; index++) {
            if(sanitizedString[index] !== sanitizedString[stringLength - 1 - index]){
                isPalFlag = false
                break
            }
        }

        return isPalFlag
    }
}
