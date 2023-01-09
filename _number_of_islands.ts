function numIslands(grid: string[][]): number 
{
    let count =0;
    let config = [[1,0], [0,1], [-1,0], [0,-1]]

    let dfs=(i,j, grid) =>{
        if(i>=grid.length || i<0 || j>=grid[0].length || j<0 ||grid[i][j]=='0'){
            return 
        }
        grid[i][j]= '0';

        for(let mov of config){
            dfs(i + mov[0], j+ mov[1], grid)
        }

    }

    for(let i =0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){

            if(grid[i][j] == '1'){
                count++;
                dfs(i,j, grid);
                // console.log(grid)
            }

        }
    }

    return count;

};
                                           
                                           
//ref - https://leetcode.com/problems/number-of-islands/solutions/3012829/js-very-easy-and-very-fast-solution-with-dfs/?envType=study-plan&id=level-1
