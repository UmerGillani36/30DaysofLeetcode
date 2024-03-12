/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const reverse = String(x).split('').reverse().join('');
    if( reverse ===  String(x)){
        return true
      }
    else{
           return false
       }
};