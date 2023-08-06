class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.heap = nums
        self.k = k
        heapq.heapify(self.heap)

        while(len(self.heap)>k):
            heapq.heappop(self.heap)
        
    
    

    def add(self, val: int) -> int:
        
        # print('heap in call',self.heap)
        heapq.heappush(self.heap, val)

        while(len(self.heap)>self.k):
            heapq.heappop(self.heap)
        
        ele = heapq.heappop(self.heap)
        heapq.heappush(self.heap,ele)

        return ele


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
