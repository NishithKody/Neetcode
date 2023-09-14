class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        dict = {}

        for i in nums:
            if(dict.get(i)):
                dict[i] = dict[i]+1
            else:
                dict[i] = 1
        
        # print('dict',dict)
        vals  = dict.items()
        
        sort_val = sorted(vals, key= lambda item:item[1], reverse=True)
        # print(sort_val)

        res = []
        i=0
        while(k>0):
            res.append(sort_val[i][0])
            i=i+1
            k=k-1
        
        return res
