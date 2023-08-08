class Solution:
    def insert(self, intervals: List[List[int]], nI: List[int]) -> List[List[int]]:

        left = []
        right = []
        mid = nI

        for i in range(0,len(intervals)):
            cur = intervals[i]

            if(cur[1]<nI[0]):
                left.append(cur)
            elif(cur[0]>nI[1]):
                right.append(cur)
            else:
                first = min(cur[0], mid[0])
                second = max(cur[1], mid[1])

                mid = [first, second]
        
        left.append(mid)
        
        return left + right
