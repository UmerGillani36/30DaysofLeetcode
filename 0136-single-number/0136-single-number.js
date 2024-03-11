/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const frequency = {};
    let result = 0;
    
    nums.forEach((num)=>{
        frequency[num] = (frequency[num] || 0) + 1;
    })
    
    Object.entries(frequency).forEach((value)=>{
        if(value[1] === 1){
            result = value[0]
        }
    })
    return Number(result)
};