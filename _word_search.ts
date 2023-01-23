function exist(board: string[][], word: string): boolean {

    let row = board.length;
    let col = board[0].length;

    let dfs = (r,c,i) =>{

        if(i == word.length){
            return true
        }
        if(r<0 || c<0|| 
        r>=row ||c>=col||
        board[r][c]!=word[i]){
            return false;
        }

        board[r][c]='#'

        if(dfs(r+1,c,i+1)||
           dfs(r-1,c,i+1)||
           dfs(r,c+1,i+1)||
           dfs(r,c-1,i+1)
        ){
            return true;
        }

        board[r][c]=word[i]

    }
   
    for(let i =0; i<row; i++){
        for(let j=0; j<col; j++){
            if(board[i][j]==word[0]){
                if(dfs(i,j,0)){
                    return true;
                }
            }
        }
    }
    return false;

};
