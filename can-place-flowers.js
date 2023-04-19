/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    if(n==0)
        return true
    if(flowerbed.length==0)
        return false
    if(flowerbed.length==1 && n==1 && flowerbed[0]==0)
        return true

    let len = flowerbed.length

    if(flowerbed[0]==0 && flowerbed[1]==0){
        n--;
        flowerbed[0]=1
    }

    for(let i =1; i<len-1; i++){
        if(flowerbed[i-1]==0 && flowerbed[i+1]==0 && flowerbed[i]==0){
            n--;
            flowerbed[i]=1
        }
    }

    if(flowerbed[len-1]==0 && flowerbed[len-2]==0){
        n--;
        flowerbed[len-1]=1
    }

    if(n <= 0)
        return true
    else
        return false
    
};
