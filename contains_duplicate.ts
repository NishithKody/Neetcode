function containsDuplicate(nums: number[]): boolean {

    let set = new Set();
    let flag =1;

    for(let i of nums){
        // console.log(i)
        if(set.has(i))
            flag=0;
        
        set.add(i)
        // console.log(set)
    }

    if(flag==1)
        return false;
    else 
        return true;


};
