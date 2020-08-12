function largestSubarraySum(arr) {
    let max = 0
    // let start
    // let end
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]
            if (sum > max) {
                max = sum
                // start = i
                // end = j
            }
        }
    }
    return max
}