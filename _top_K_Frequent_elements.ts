function topKFrequent(nums: number[], k: number): number[] {

    let res = [];
    let map = new Map();

    for(let i of nums){
        map.set(i, map.get(i)+1 || 1);
    }

    let arr = [...map.entries()]
    console.log(arr)

    arr.sort((a,b)=>b[1]-a[1])
    
    for(let i=0;i<k;i++){
        res.push(arr[i][0])
    }

    return res;

};
                          
                      
