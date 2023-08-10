class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:

        res = [] 
        intervals = sorted(intervals, key=lambda x:x[0])
        # print('intervals',intervals)
        res.append(intervals[0])

        for i in range(1,len(intervals)):
            prev = res.pop()
            # print('prev',prev)
            cur = intervals[i]
            if(cur[0]>prev[1]):
                res.append(prev)
                res.append(cur)
            else:
                first = min(prev[0],cur[0])
                second = max(prev[1], cur[1])
                res.append([first, second])
        
        return res
