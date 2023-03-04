/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let res = []
    let rowStart = 0
    let rowEnd = matrix.length-1

    let colStart = 0
    let colEnd = matrix[0].length-1

    while(rowStart<=rowEnd && colStart<=colEnd){

        for(let i=colStart; i<=colEnd; i++)
            res.push(matrix[rowStart][i])
        
        rowStart ++;

        for(let j=rowStart; j<=rowEnd; j++ )
            res.push(matrix[j][colEnd])
        
        colEnd--;

        if(rowStart <=rowEnd && colStart<=colEnd){

            for(let k = colEnd; k>=colStart;k--)
                res.push(matrix[rowEnd][k])

            rowEnd--;

            for(let m = rowEnd; m>=rowStart; m--)
                res.push(matrix[m][colStart])

            colStart++;
        }

    }

    return res
    
};
