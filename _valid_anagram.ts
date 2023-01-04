function isAnagram(s: string, t: string): boolean {

    let map1 = new Map();

    let map2 = new Map();

    if(s.length != t.length)  
        return false;  

    for(let i =0; i<s.length; i++){
        if(map1.has(s[i])){
            map1.set(s[i], map1.get(s[i])+1)
        }
        else{
            map1.set(s[i],1)
        }

        

        if(map2.has(t[i])){
            map2.set(t[i], map2.get(t[i])+1)
        }
        else{
            map2.set(t[i],1)
        }

        
    }

    console.log(map1)
    console.log(map2)

    for(let i of map1){
        if(i[1]!=map2.get(i[0]))
            return false;
    }

    return true;

};
