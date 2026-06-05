class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        // Map closing brackets to their corresponding opening brackets
        const bracketMap = {
            ')': '(',
            ']': '[',
            '}': '{'
        };
        
        for (const char of s) {
            if(char in bracketMap) {
                const topElement = stack.pop()

                if(bracketMap[char] != topElement){
                    return false
                }
            } else {
                stack.push(char)
            }
        }

        return stack.length == 0
    }
}
