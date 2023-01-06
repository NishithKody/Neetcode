function search(nums: number[], target: number): number {

    
    let low = 0;
    let high = nums.length -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(nums[mid]==target){
            return mid;
        }

        //left
        if(nums[low]<=nums[mid]){
            if(target>nums[mid] || target < nums[low]){
                low = mid +1;
            }
            else{
                high = mid -1
            }
        }
        //right
        else{
            if(target<nums[mid] || target> nums[high]){
                high = mid -1
            }
            else{
                low = low +1
            }
        }
    }
    return -1;
};
