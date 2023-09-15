class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:

        max_heap = [-stone for stone in stones]
        
        heapq.heapify(max_heap)
        # print(heapq.heappop(max_heap))

        res = 0

        while(len(max_heap)>1):
            a = heapq.heappop(max_heap)
            b = heapq.heappop(max_heap)

            if a!=b:
                a=-a
                b=-b

                temp = a-b
                heapq.heappush(max_heap,-temp)
        
        if(len(max_heap)==0):
            return 0
        res=max_heap[0]

        return -res


