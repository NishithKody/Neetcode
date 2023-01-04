function isValidSudoku(board: string[][]): boolean {

    let row = new Set();
    let col = new Set();
    let sq = new Set();

    for(let i=0;i<9;i++){

        // console.log('i',i)
        for(let j=0;j<9;j++){

            if(board[i][j] =='.'){
                continue;
            }
            // console.log('j',j)
            let sqKey = Math.floor(i/3)+"s"+Math.floor(j/3)+"s"+board[i][j] 
            let rowKey = i+"r"+board[i][j];
            let colKey = j+"c"+board[i][j];

            if(row.has(rowKey) || col.has(colKey) || sq.has(sqKey))
            {
                return false;
            }
            row.add(rowKey)
            col.add(colKey)
            sq.add(sqKey)
            // console.log(sq)

        }
    }

    return true;

};
