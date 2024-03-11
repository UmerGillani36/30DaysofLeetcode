/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let total = nums.indexOf(0) !== nums.lastIndexOf(0) ? 0 : 1;
    let output = [];
    let hasZero = false;

if (total === 1) {
    nums.forEach(function(self) {
        if (self !== 0) {
            total *= self;
        } else {
            hasZero = true;
        }
    });
}

nums.forEach(function(self) {
    if (total === 0) {
        output.push(0);
    } else {
        
        if (self !== 0) {
            output.push(hasZero ? 0 : total/self);
        } else {
            output.push(total);
        }
    }
});

return output;
};