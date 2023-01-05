function lengthOfLongestSubstring(s: string): number {
    let set =[]

    let r =0;
    let count = 0;

    while(r< s.length){
        if(set.includes(s[r])){
            if(set.length>count){
                count=set.length  
            }
            let index = r;

            while(set.includes(s[index])){
                set.pop();
                r--;
            }
            set = []
        }
        else{
            set.push(s[r]);
        }
        r++;
        // console.log('count',count)
        // console.log('set-',set)
    }

    if(set.length>count)
        count=set.length

    return count;

};
      
      
/// method 2(better)
      
      function lengthOfLongestSubstring(s: string): number {
    let l = 0;
    let count =0;

    let set = new Set();

    for(let i =0; i<s.length; i++){

        if(set.has(s[i])){
            while(set.has(s[i])){
                set.delete(s[l])
                l++;
                
            }
        }

        set.add(s[i])
        count = Math.max(count, i-l+1)
    }
 
    return count
};
