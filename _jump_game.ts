function canJump(nums: number[]): boolean {
    let goal = nums.length -1;

    for(let i = nums.length-2; i>=0; i--)
    {
        if(nums[i]+i>=goal){
            goal=i
        }
    }

    if(goal==0){
        return true
    }
    else{
        return false;
    }


};
