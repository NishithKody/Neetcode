function letterCombinations(digits: string): string[] {

    if(digits==""){
        return[]
    }

    let map = new Map();
    map.set('2','abc')
    map.set('3','def')
    map.set('4','ghi')
    map.set('5','jkl')
    map.set('6','mno')
    map.set('7','pqrs')
    map.set('8','tuv')
    map.set('9','wxyz')

    let digits_split = digits.split('')
    console.log('ds',digits_split)

    let res = []
    let dfs = (i, cur) => {

        if(cur.length==digits.length){
            res.push(cur)
            return
        }

        let digit = map.get(digits_split[i])
        console.log('digit',digit)
        for(let c of digit){
            dfs(i+1, cur+c)
        }

    }

    dfs(0,"")

    return res


};
