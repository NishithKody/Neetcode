/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    let n = text1.length
    let m = text2.length

    let dp = new Array(n+1)
    for(let i=0; i<=n; i++){
        dp[i] = new Array(m+1)
    }

    for(let i = 0; i<=n; i++){
        dp[i][0] = 0
    }

    for(let j=0; j<=m; j++){
        dp[0][j]=0
    }

    for(let i=1; i<=n; i++){
        for(let j=1; j<=m; j++){
            if(text1[i-1]==text2[j-1]){
                // return 1+util(i1-1, i2-1)
                dp[i][j] = 1+dp[i-1][j-1]
            }
            else{
                // return 0+ Math.max(util(i1-1,i2), util(i1, i2-1))
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }

    return dp[n][m]

};
