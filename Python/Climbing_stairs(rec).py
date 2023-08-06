/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    //

    let util = (step)=>{
        if(step==0){
            return 1
        }
        if(step<0){
            return 0
        }

        return util(step-1) + util(step-2)
    }

    return util(n)
    
};
