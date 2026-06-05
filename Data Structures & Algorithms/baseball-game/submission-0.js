class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for (const op of operations) {
            if (op === "D") {
                // Double the last score
                stack.push(stack[stack.length - 1] * 2);
            } else if (op === "+") {
                // Sum the last two scores
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
            } else if (op === "C") {
                // Invalidate the last score
                stack.pop();
            } else {
                // It's a number string: convert it to an actual number immediately
                stack.push(Number(op));
            }
        }

        // Sum up the stack natively without needing parseInt anymore
        return stack.reduce((sum, current) => sum + current, 0);
    }
}