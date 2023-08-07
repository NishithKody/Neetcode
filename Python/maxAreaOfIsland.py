class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:

        global res
        res = 0

        n = len(grid)
        m = len(grid[0])

        def util(r,c):
            # print('inside util',r,c)
            if(r>=n or c>=m or r<0 or c<0 or grid[r][c]==0):
                return 0
            
            grid[r][c]=0
            
            top = util(r-1,c)
            bot = util(r+1,c)
            left = util(r, c-1)
            right = util(r, c+1)

            return top + bot + left + right +1
        

        for i in range(0,n):
            for j in range(0,m):
                if(grid[i][j]==1):
                    # print('grid call ',i,j)
                    val = util(i,j)
                    res = max(res, val)
        
        return res
