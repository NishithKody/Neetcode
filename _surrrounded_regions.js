/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(b) {

    let row = b.length
    let col = b[0].length

    let convert = (r,c) =>{
        if(r<0 || c<0 || r>=row || c>=col || b[r][c]!='O')
            return
        
        b[r][c]='T'
        convert(r+1,c)
        convert(r,c+1)
        convert(r-1,c)
        convert(r,c-1)
    }

    for(let i =0; i<row; i++){
        for(let j=0; j<col; j++){
            if((i==0 || i==row-1 || j==0 || j==col-1) && b[i][j]=='O'){
                convert(i,j)
            }
        }
    }

    for(let i =0; i<row; i++){
        for(let j=0; j<col; j++){
            if(b[i][j]=='O'){
                b[i][j]='X'
            }
        }
    }


    for(let i =0; i<row; i++){
        for(let j=0; j<col; j++){
            if(b[i][j]=='T'){
                b[i][j]='O'
            }
        }
    }



    
};
