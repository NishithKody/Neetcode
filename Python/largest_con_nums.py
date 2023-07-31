class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        s = set(nums)
        length = 0
        for i in nums:
            v=i
            if(v-1 not in s):
                temp = 1
                while(v+1 in s):
                    temp = temp+1
                    v=v+1

                if(temp>length):
                    length = temp        

        return length
