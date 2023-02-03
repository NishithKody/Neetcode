/**
 * @param {string} s
 * @return {number}
 */

//Similar to LongestPalindromeSubString
//Here I have condensed the code

var countSubstrings = function(s) {
    
    let res = 0
    for(let i =0; i<s.length; i++){
        res +=util(i,i,s) // for odd cases
        res +=util(i,i+1,s) // for even cases
    }

    return res

};

let util= (l,r,s) =>{

    let temp = 0;

    while(l>=0 && r<s.length && s[l]==s[r]){
        temp++;
        l--;
        r++;
    }

    return temp;

}
