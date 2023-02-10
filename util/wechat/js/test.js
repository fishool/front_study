const readline = require('readline');
let nums = readline().split(' ');
let target = readline();

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const diffs = {};
    // 缓存数组长度
    const len = nums.length;
    // 遍历数组
    for (let i = 0; i < len; i++) {
        // 判断当前值对应的 target 差值是否存在
        if (diffs[target - nums[i]] !== undefined) {
            // 若有对应差值，那么得到答案
            return [diffs[target - nums[i]], i];
        }
        // 若没有对应差值，则记录当前值
        diffs[nums[i]] = i;
    }
};

let result = twoSum(nums, target);

print(result[0])
print(result[1])



