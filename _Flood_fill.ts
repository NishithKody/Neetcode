/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {

    let rlen = image.length;
    let clen = image[0].length;

    let color = image[sr][sc]
    if(color == newColor)  return image;

    

    let dfs = (r,c) =>{
        if(image[r][c]==color){
            image[r][c] = newColor;
            if(r>=1) dfs( r-1, c)
            if(c >=1) dfs (r, c-1)
            if (r+1 < rlen) dfs (r+1,c)
            if(c+1 <clen) dfs(r, c+1)
        }
    }
    dfs(sr, sc);
    return image;
    
};

