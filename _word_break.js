/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

    let dp = new Array(s.length+1).fill(false)
    dp[0]= true
    
    for(let i=0; i<s.length; i++){
        if(dp[i]==true){
            for(let word of wordDict){
                let prefix = s.slice(i,i+word.length)

                if(prefix == word){
                    dp[i+word.length]=true
                }
            }
        }
    }

    return dp[s.length]
    
};

/// Here dp.fill(false) is very expensive we can optimize by - return dp[s.length] ?  dp[s.length] : false;

