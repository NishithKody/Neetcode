class Solution:
    def trap(self, h: List[int]) -> int:
        left = []
        right = []

        res = 0

        l_m = h[0]
        r_m = h[len(h)-1]

        for i in h:
            val = i

            if(val>=l_m):
                l_m=val

            left.append(l_m)
        
        # print('l_max',left)

        for i in reversed(h):
            val = i

            if(val>=r_m):
                r_m=val

            right.append(r_m)
        
        right= list(reversed(right))
        # print('r_max',right)

        for i in range(1,len(h)-1):
            val = h[i]

            left_val = left[i-1]
            right_val = right[i+1]

            temp =  min(left_val, right_val)-val
            if(temp<0):
                temp=0
            res = res +temp

        return res

        
