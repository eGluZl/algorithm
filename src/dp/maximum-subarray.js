/**
 * 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 O (n)。
 *
 * 示例:
 *  输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *  输出: 6
 *  解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 * 提示：
 *  1 <= arr.length <= 10^5
 *  -100 <= arr[i] <= 100
 * */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  // let dp = []
  // for (let i = 0; i < nums.length; i++) {
  //   dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0)
  //   if(i === nums.length - 1){
  //     return Math.max(...dp)
  //   }
  // }
  return Math.max(...nums.reduce((dp, v, i) => (i && (dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0) + v), dp), [nums[0]]))
}

/**
 * dp表示从0到length位， 连续位的最大累计和
 * 从i位到i+1位
 *  上一位 < 0 对最大累加贡献位 -， 取当前位
 *  上一位 > 0 对最大累加贡献位 +， 与当前位相加
 * 状态转变方程：dp[i] = 当前位的数 + （dp[i - 1] > 0 ? dp[i - 1] : 0）
 * */