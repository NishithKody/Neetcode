function threeSum(nums: number[]): number[][] {


let res = [];

nums.sort((a,b)=> a-b)

for(let i=0; i<nums.length; i++){

    if(i>0 && nums[i]==nums[i-1]){
        continue;
    }

    let l = i+1;
    let r = nums.length -1;
    // console.log('i',i)
    // console.log('l',l)
    // console.log('r',r)

    while(l<r){

        if((nums[i]+nums[l]+nums[r])==0){
            res.push([nums[i],nums[l],nums[r]])
            l++;
            while(nums[l]==nums[l-1] && l<r){
                l++
            }
        }
        else if((nums[i]+nums[l]+nums[r])<0){
            l++;
        }
        else if((nums[i]+nums[l]+nums[r])>0){
            r--;
        }

        
    }
}

return res;

};
