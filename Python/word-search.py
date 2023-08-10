class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:

        n = len(board)
        m = len(board[0])
        
        def util(r,c,i):

            if(i==len(word)):
                return True

            if(r>= n or c>= m or r<0 or c<0 or board[r][c]!=word[i]):
                return False
            
            
            board[r][c] = '#'

            left = util(r+1,c,i+1)
            right = util(r-1,c,i+1)
            top = util(r,c+1,i+1)
            bottom = util(r,c-1,i+1)

            board[r][c] = word[i]

            return left or right or top or bottom
        
        for i in range(0,n):
            for j in range(0,m):
                if(board[i][j]==word[0]):
                    res = util(i,j,0)
                    if(res == True):
                        return True
        
        return False
            

