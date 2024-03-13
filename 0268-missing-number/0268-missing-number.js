/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const sortedNums = nums.sort((a,b)=> a - b);
    
    for(let i=0; i<= nums.length; i++){
            if(!nums.includes(i)){
               return i;
               }
    }
};