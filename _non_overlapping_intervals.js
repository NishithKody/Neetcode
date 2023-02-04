/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {

    let res = []
    intervals.sort((a,b)=>a[1]-b[1])
    res.push(intervals[0])

    intervals.shift()

    let count =0;

    for(let cur of intervals){
        let curStart = cur[0]
        // let curEnd = cur[1]
        let prevEnd = res[res.length-1][1]

        if(curStart<prevEnd){
            //skip
            count++;
        }
        else{
            res.push(cur)
        }
    }

    return count;
    
};
