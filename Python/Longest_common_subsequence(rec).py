/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

    let n = text1.length
    let m = text2.length

    let util = (i1,i2)=>{
        if(i1 <0 || i2<0){
            return 0
        }

        //match
        if(text1[i1]==text2[i2]){
            return 1+util(i1-1, i2-1)
        }
        else{
            return 0+ Math.max(util(i1-1,i2), util(i1, i2-1))
        }
    }

    let res = util(n-1,m-1)
    return res

    
    
};
