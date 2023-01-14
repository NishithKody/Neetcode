function singleNumber(nums: number[]): number {
    let res = 0;
    for(let i of nums){
        res = res ^ i
    }

    return res

};
