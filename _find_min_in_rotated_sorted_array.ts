function findMin(nums: number[]): number {

    let low = 0;
    let high = nums.length-1;

    if(nums[0]<nums[nums.length-1])
        return nums[0];
    
    if(nums.length==1)
        return nums[0]

    while(low<high){
        let middle = Math.floor((low+high)/2);

        if (nums[middle]<nums[middle+1] && nums[middle-1]>nums[middle])
            return nums[middle]
            
        else if(nums[middle]>nums[middle+1])
            return nums[middle+1]
        
        else if(nums[middle]>nums[nums.length-1])
            low = middle+1
        else
            high = middle-1;


    }

};
