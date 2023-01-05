function climbStairs(n: number): number {

    let res = util(n);
    
    return res;
};

let map = new Map();
map.set(1,1);
map.set(2,2);

let util = (n)=>{

    if(map.has(n))
        return map.get(n)
    
    let result = util(n-1) + util(n-2);
    map.set(n,result);
    return result;
    
}

// look into - https://leetcode.com/problems/climbing-stairs/solutions/1531764/python-detail-explanation-3-solutions-easy-to-difficult-recursion-dictionary-dp/
