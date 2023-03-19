/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {

    let n = grid.length
    let m = grid[0].length

    let fresh = 0;
    let time = 0;

    let queue = []

    let dir = [[0,1],[1,0],[-1,0],[0,-1]]

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            if(grid[i][j]==1){
                fresh++
            }
            if(grid[i][j]==2){
                queue.push([i,j])
            }
        }
    }

    while(queue.length!=0 && fresh>0){
        //   console.log('initial queue',queue)
          let l = queue.length
        for(let i =0; i<l; i++){
            let val = queue.shift()
            // console.log('pop',val)
            let r = val[0]
            let c = val[1]

            for (let d of dir){
                let nr = r + d[0]
                let nc = c + d[1]

                if(nr>=n || nc>= m || nc<0 || nr<0 || grid[nr][nc]!=1){
                    continue
                }

                grid[nr][nc]=2
                queue.push([nr,nc])
                fresh--;
            }
        }
        time++
        // console.log('queue next itr',queue)
    }

    if(fresh!=0)
        return -1
    else 
        return time

};
