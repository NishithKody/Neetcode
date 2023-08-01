class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        index = 0
        res = 0
        val = prices[0]
        for i in range(0,len(prices)):
            diff = prices[i] - prices[index]
            if(diff>res):
                res = diff
            
            if(prices[i]<prices[index]):
                index = i
        
        return res
