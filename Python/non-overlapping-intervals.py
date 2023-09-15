class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        si = sorted(intervals, key=lambda item:item[1])

        res = 0
        i=1
        while(i<len(si)):
            prev = si[i-1]
            cur = si[i]

            if(prev[1]>cur[0]):
                res = res+1
                si.pop(i)
                i=i-1
            
            i=i+1

        return res
        
