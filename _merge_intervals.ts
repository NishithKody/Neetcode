function merge(intervals: number[][]): number[][] {
    let res = []

    intervals.sort((a,b)=>a[0]-b[0])
    
    res.push(intervals[0])

    for(let cur of intervals){
        let curStart = cur[0]
        let curEnd = cur[1]
        let prevEnd = res[res.length-1][1]

        if(curStart<=prevEnd){
            res[res.length-1][1] = Math.max(curEnd,prevEnd)
        }
        else{
            res.push(cur)
        }
    }
    
    return res

};
