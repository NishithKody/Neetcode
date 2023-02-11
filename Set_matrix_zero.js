/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    let set = new Set()

    let row = matrix.length
    let col = matrix[0].length

    for(let i =0; i<row; i++){
        for(let j=0; j<col; j++){
            let temp = `${i}|${j}`
            if(set.has(temp)){
                // console.log('set checl',i,j)
                continue;
            }
            if(matrix[i][j]==0){
                for(let a=i; a<row; a++){
                    if(matrix[a][j]!=0){
                        set.add(`${a}|${j}`)    
                    }
                    matrix[a][j] = 0
                    
                }
                // console.log(matrix,i,j)
                for(let a=i; a>=0; a--){
                    if(matrix[a][j]!=0){
                        set.add(`${a}|${j}`)    
                    }
                    matrix[a][j] = 0
                }

                for(let b=j; b<col; b++){
                    if(matrix[i][b]!=0){
                        set.add(`${i}|${b}`)
                    }
                    matrix[i][b] = 0
                    
                }

                for(let b=j; b>=0; b--){
                    if(matrix[i][b]!=0){
                        set.add(`${i}|${b}`)
                    }
                    matrix[i][b] = 0
                }
            }
        }
    }

    // console.log('set',set)

    return matrix
    
};
