// ************************ Dynamic Programming (Optional) **************************


// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.


function knapsack(weights, values, capacity) {
    const n = weights.length;
    // Create a 2D array to store the maximum value that can be obtained
    // dp[i][w] represents the maximum value that can be obtained with the first i items and capacity w
    let dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));

    // Build the dp array from bottom-up
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Option 1: Include the i-th item
                let includeItem = values[i - 1] + dp[i - 1][w - weights[i - 1]];
                // Option 2: Exclude the i-th item
                let excludeItem = dp[i - 1][w];
                // Take the maximum of including or excluding the item
                dp[i][w] = Math.max(includeItem, excludeItem);
            } else {
                // If the item cannot be included due to weight constraint
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // The maximum value that can be obtained with the given capacity
    return dp[n][capacity];
}

const weights = [1, 2, 3, 8, 7, 4];
const values = [20, 5, 10, 40, 15, 25];
const capacity = 8;

const maxValue = knapsack(weights, values, capacity);
console.log("Maximum value that can be obtained:", maxValue);

