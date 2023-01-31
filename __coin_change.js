/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = new Array(amount+1).fill(Infinity)

    dp[0] = 0

    for(let coin of coins){
        for(let i=coin; i<=amount;i++){
            dp[i] = Math.min(dp[i], dp[i-coin]+1)
        }
    }

    if(dp[amount]===Infinity){
        return -1
    }
    else{
        return dp[amount]
    }
    
};
//-----------------------------------------
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {

    let dp = new Array(amount+1).fill(amount+1)

    dp[0] = 0

    for(let i =0;i<=amount; i++){
        for(let j=0; j<coins.length; j++){
            if(coins[j]<=i){
                dp[i] = Math.min(dp[i], 1+ dp[i-coins[j]])
            }
        }
        console.log(dp)
    }

    if(dp[amount]==amount+1){
        return -1
    }
    else{
        return dp[amount]
    }
    
};
