/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {

    let row = heights.length
    let col = heights[0] . length

    let pac = new Set()
    let alt = new Set()

    let dfs = (r,c,visit, prevHeight) =>{
        
        if(r<0 || c<0 ||  r>=row || c>=col || heights[r][c]< prevHeight )
        {
            return
        }    
        if(visit.has(r+'|'+c)){
            // console.log('check')
            return
        }
        // console.log(visit)

        visit.add(r+'|'+c)

        dfs(r-1,c,visit, heights[r][c])
        dfs(r+1,c,visit, heights[r][c])
        dfs(r,c-1,visit, heights[r][c])
        dfs(r,c+1,visit, heights[r][c])
}


    for(let i=0; i<col; i++){
        dfs(0, i, pac, heights[0][i])
        dfs(row-1, i, alt, heights[row-1][i])
    }

    for(let i=0; i<row; i++){
        dfs(i, 0, pac, heights[i][0])
        dfs(i, col-1, alt, heights[i][col-1])
    }

    let res = []
    for(let i =0; i<row; i++){
        for(let j=0; j<col; j++){
            if(pac.has(i+'|'+j) && alt.has(i+'|'+j))
            {
                res.push([i,j])
            }
        }
    }
    return res
    
};
