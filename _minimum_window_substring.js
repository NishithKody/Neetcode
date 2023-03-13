/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {

    let map = new Map()

    for(let i of t){
        map.set(i, map.get(i)+1 || 1)
    }

    let count = map.size;

    let len = Infinity;
    let minWindow = ""
    
    let l=0
    let r=0

    while(r<s.length){

        let rcur = s[r]
        if(map.has(rcur)){
            map.set(rcur, map.get(rcur) -1)
            if(map.get(rcur)==0){
                count--;
            }
        }

        r++;
        while(count==0)
        {
            if(r-l<len){
                minWindow = s.slice(l,r)
                len=r-l
            }
            lcur = s[l]
            if(map.has(lcur)){
                map.set(lcur, map.get(lcur)+1)

                if(map.get(lcur)>0) count++;
            }
            l++;
            
        }
        
    }

    return minWindow
    
};


//reference - https://www.youtube.com/watch?v=z9e-tGD7Z8g
