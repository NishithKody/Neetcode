/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let l =1;
    let r = 1

    for (let i of piles)
        if(i>r)
            r=i

    let res = r;

    while(l<=r){
        let k = parseInt((l+r)/2)
        let temp = 0

        for(let p of piles){
            temp = temp + Math.ceil(p/k)
        }

        if(temp<=h)
        {
            res = Math.min(res,k)
            r = k -1
        }
        else{
            l = k +1
        }


    }
    return res
    
};
