const dp = [0];

function fibonacci(num) {
    if(num <= 2) return 1;
    if(dp[num]) return dp[num];
    dp[num] = fibonacci(num-1) + fibonacci(num-2);
    return dp[num];
}

console.log(fibonacci(10));
