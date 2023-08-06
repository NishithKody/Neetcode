class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:

        global count
        count = 0 
        n = len(grid)
        m = len(grid[0])

        def dfs(r,c):
            if(r>=n or r<0 or c>=m or c<0 or grid[r][c]=='0'):
                return 
            
            grid[r][c]='0'

            dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        
        for i in range(0,n):
            for j in range(0,m):
                if( grid[i][j] == '1'):
                    count = count +1
                    dfs(i,j)
        
        return count
