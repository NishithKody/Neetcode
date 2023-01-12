function characterReplacement(s: string, k: number): number {

    let map = new Map();
    let highFreq = 0;
    let longest =0;

    let l =0;
    let r =0;

    while(r<s.length){
        let val = s.charAt(r);

        map.set(val, map.get(val)+1 || 1)

        highFreq = Math.max(highFreq, map.get(val))

        while((r-l+1)-highFreq>k){
            let leftVal = s.charAt(l)
            map.set(leftVal, map.get(leftVal)-1 || 0)
            l++;
        }

        longest = Math.max(longest, r-l+1)

        r++;

    }

    return longest;

};



//Good ref- https://leetcode.com/problems/longest-repeating-character-replacement/solutions/2032968/javascript-solution-with-explanation-and-code-comments/
