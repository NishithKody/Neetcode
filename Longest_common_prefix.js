/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if(strs.length == 0)
        return ""
    
    if(strs.length ==1)
        return strs[0]
    
    let res = strs[0]


    for(let i=1; i<strs.length; i++){
        let temp = ""

        let val = strs[i]
        let j =0;
        
        
        while(j<res.length && res[j]==val[j]){
            temp = temp + res[j]
            j++;
        }
        res=temp;
        // console.log(res)
        
    }

    return res;

    
    
};
