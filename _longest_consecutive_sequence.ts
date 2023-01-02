function longestConsecutive(nums: number[]): number {

    let count =0;
    let set = new Set(nums);

    // console.log('set',set)

    for(let i =0; i<nums.length; i++){
        let val = nums[i]
        if(!set.has(val-1)){
            let temp =0;
            
            // console.log('val',val)

            while(set.has(val)){
                temp++;
                val++;
                // console.log("temp,val",temp,val)
            }
            if(temp>count){
                count=temp;
            }
        }
    }

    


    return count;

};
