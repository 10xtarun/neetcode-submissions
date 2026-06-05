class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        // circle = 0; square = 1
        // students.length == sandwiches.length

        const counts = students.reduce((accObj, currObj) => {
            return {
                0: 0 == currObj ? accObj[0] + 1 : accObj[0],
                1: 1 == currObj ? accObj[1] + 1 : accObj[1]
            }
        }, 
        {
            0: 0,
            1: 0
        }
        )

        for(let sw of sandwiches) {
            if(counts[sw] > 0){
                counts[sw]--
            } else {
                break
            }
        }

        return counts[0] + counts[1]
    }
}
