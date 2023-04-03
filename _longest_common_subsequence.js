/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    let n = text1.length
    let m = text2.length

    let arr = new Array(n+1)
    for(let i=0; i<=n;i++){
        arr[i]=new Array(m+1).fill(0)
    }

    for(let i=n-1; i>=0; i--){
        for(let j=m-1; j>=0; j--){
            if(text1[i]==text2[j]){
                arr[i][j]= 1 + arr[i+1][j+1]
            }
            else{
                arr[i][j] = Math.max(arr[i+1][j],arr[i][j+1])
            }
        }
    }

    return arr[0][0]
    
};
