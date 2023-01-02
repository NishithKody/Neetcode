function groupAnagrams(strs: string[]): string[][] {

    let map = new Map();
    let res = []

    for(let i = 0;i<strs.length;i++){
        let temp = strs[i].split('').sort().join('');
        if(map.has(temp)){
            let val = map.get(temp);
            val.push(strs[i]);
        }
        else{
            map.set(temp,[strs[i]]);
        }
    }

    for(let j of map)
    {
        res.push(j[1])
    }
    return res;

};
