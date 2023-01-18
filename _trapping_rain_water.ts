function trap(height: number[]): number {
    let l=0;
    let r=height.length -1;
    let water = 0;
    let maxLeft = height[l]
    let maxRight = height[r]

    while(l<r){
        if(maxLeft<=maxRight){
            l++;
            maxLeft = Math.max(maxLeft, height[l])
            water += maxLeft - height[l]
        }
        else{
            r--;
            maxRight = Math.max(maxRight, height[r])
            water += maxRight - height[r]
        }
    }

    return water;

};
