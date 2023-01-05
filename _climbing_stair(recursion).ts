function climbStairs(n: number): number {

    let res = util(n);
    
    return res;
};

let util = (n)=>{
    if(n==1)
        return 1 // only one step option is availble

    if(n==2)
        return 2 // two options are possible : to take two 1-stpes or to only take one 2-steps
    
    return util(n-1)+util(n-2)
}

//ref - https://leetcode.com/problems/climbing-stairs/solutions/1531764/python-detail-explanation-3-solutions-easy-to-difficult-recursion-dictionary-dp/
