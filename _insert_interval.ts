function insert(intervals: number[][], nI: number[]): number[][] 
{
    
    let left = []
    let right = []
    let newTemp=[nI[0],nI[1]]
    
    for(let cur of intervals){
        if(cur[1]< nI[0]){
            left.push(cur)
        }
        else if(cur[0]>nI[1]){
            right.push(cur)
        }
        else{
            let low = Math.min(
                cur[0],nI[0]
            )
            let high = Math.max(
                cur[1],nI[1]
            )
            newTemp[0] = low
            newTemp[1] = high
            nI = [low,high]
        }
    }
    
    // if(intervals.length==0)
    //     return [nI]

    return left.concat([newTemp]).concat(right)
};
          
//good ref -https://leetcode.com/problems/insert-interval/solutions/844394/python-js-go-c-o-n-by-boundary-checking-w-comment/?orderBy=most_votes&languageTags=javascript
