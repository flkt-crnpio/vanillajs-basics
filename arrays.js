/*
Task:
Complete the getSecondLargest function in the editor below. It has one parameter:
an array, 'nums', of 'n' numbers.
The function must find and return the second largest number in 'nums'.
*/

// const nums = [2,3,6,6,5];
function getSecondLargest(nums) {
    // Complete the function
    let num = 0;
		let second = 0;
		for(let i = 0; i<nums.length; i++){
			if(num < nums[i]) {
				second = num;
				num = nums[i];
			} else if(num != nums[i] && second < nums [i]){
				second = nums[i];
			}
		}
		return second;
}
// getSecondLargest(nums);
