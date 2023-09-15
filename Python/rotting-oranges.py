class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        q = deque()

        n = len(grid)
        m = len(grid[0])
        time = 0
        count=0

        for i in range(0,n):
            for j in range(0,m):
                if grid[i][j]==1:
                    count = count +1
                if grid[i][j]==2:
                    q.append([i,j])
     

        dirs = [[0,1],[1,0],[-1,0],[0,-1]]

        while(len(q)>0 and count>0):
            l = len(q)           

            while(l>0):
                [r,c] = q.popleft()

                for d in dirs:
                    nr = r+d[0]
                    nc = c+d[1]

                    if(nr>=n or nc>=m or nr<0 or nc <0 or grid[nr][nc]!=1):
                        continue
                    else:
                        count = count-1
                        grid[nr][nc]=2
                        q.append([nr,nc])

                l=l-1
            
            time = time +1
 
        if(count!=0):
            return -1
        return time
