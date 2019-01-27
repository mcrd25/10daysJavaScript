function getSecondLargest(nums) {
    let largest = nums[0], second_largest = nums[0];
    // Complete the function
    for (let i = 1; i < nums.length; i++){
        if (nums[i] > largest) {
            second_largest = largest;
            largest = nums[i];
        } else if (nums[i] < largest && nums[i] > second_largest) {
            second_largest = nums[i];
        }
    }
    return second_largest;
}