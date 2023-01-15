function hammingWeight(n: number): number {

    let count = 0;

    for(let i=0; i<32; i++){
        let temp = n & 1;
        count = count + temp;
        n = n >>> 1;
    }

    return count;

};
