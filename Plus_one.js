/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let car = 1
    let res = []

    for(let i=digits.length-1; i>=0; i--){
        let val = digits[i] + car
        if(val >9){
            car = 1
            val = 0
            res.unshift(val)
        }
        else{
            car = 0
            res.unshift(val)
        }
    }

    if(car==1)
        res.unshift(1)

    return res
    
};
