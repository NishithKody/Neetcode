class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """

        n = len(matrix)
        m = len(matrix[0])

        q = []

        def convert(r,c):

            for k in range(0,n):
                matrix[k][c] = 0
            
            for l in range(0,m):
                matrix[r][l] = 0
            


        for i in range(0,n):
            for j in range(0,m):
                if(matrix[i][j]==0):
                    q.append([i,j])

        for [r,c] in q:
            convert(r,c)
