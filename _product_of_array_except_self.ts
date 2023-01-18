function productExceptSelf(nums: number[]): number[] {
    let res = []
    let preArr = []
    let postArr = []
    let pre = 1;
    let post = 1;

    for(let i =0; i<nums.length; i++){
        let temp = pre * nums[i]
        preArr.push(temp)
        pre=temp
    }

    for(let i=nums.length-1; i>=0; i--){
        let temp = post*nums[i]
        postArr.unshift(temp)
        post=temp
    }

    res.push(postArr[1])

    for(let i =1; i<nums.length-1;i++){
        let temp = preArr[i-1] * postArr[i+1]
        res.push(temp)
    }

    res.push(preArr[nums.length-2])

    return res;

};
