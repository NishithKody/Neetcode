function maxSubArray(nums: number[]): number {

    let sum =nums[0];
    let mx = nums[0]

    for(let i=1; i<nums.length; i++){

        if(sum<0)
            sum=0;

        sum = sum + nums[i];
        
        if(sum>mx){
            mx=sum;
        }
        
    }
    return mx;

};
