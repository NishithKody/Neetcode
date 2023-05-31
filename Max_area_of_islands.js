/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {

    let res = 0
    let n = grid.length
    let m = grid[0].length

    let dfs =(r,c, cur)=>{

        if(r<0 || c<0 || r>=n || c>=m|| grid[r][c]==0)
            return 0

        grid[r][c] = 0

        let up = dfs(r+1, c, cur)
        let down = dfs(r-1, c, cur)
        let right = dfs(r, c+1, cur)
        let left = dfs(r, c-1, cur)

        return 1+ up+ down+ right+ left

    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j]==1)
                res= Math.max(res, dfs(i,j))
        }
    }

    return res
    
};
