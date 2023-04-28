/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s=s.trim()
    let n = s.length

    for(let i =n; i>=0; i--){
        if(s[i]==' '){
            return n -i-1
        }
    }

    return n
    
};

