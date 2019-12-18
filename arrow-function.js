/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
    for(const [key,num] of nums.entries()) {
      if(num%2===0)
        nums[key] = num*2
      else
        nums[key] = num*3
    }
    return nums;
}
const a = [1,2,3,4,5];
console.log(modifyArray(a).toString().split(',').join(' '));
