/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {

    let dp = new Array(s.length+1).fill(1)



    for(let i = s.length-1; i>=0; i--){

        if(s[i]==0){
            dp[i]=0
        }
        else{
            dp[i] = dp[i+1]
        }

        if(i+2 <=s.length && (s[i]=='1' || s[i]==2 && '0123456'.includes(s[i+1]))){
            dp[i] = dp[i] + dp[i+2]
        }
    }

    //226
    //0001
    //2211
    //
    return dp[0]
    
};
