class TrieNode{
    constructor(){
        this.children = []
        this.wordEnd = false;
    }

}

function addWord(words){
    let root = new TrieNode()

    for(let word of words){
        let cur = root;
        for(let w of word){
            if(!cur.children[w]){
                cur.children[w] = new TrieNode()
            }

            cur = cur.children[w]
        }
        cur.wordEnd = true
    }
    return root
}


var findWords = function(board, words) {
    let root = addWord(words)
    // console.log('root',root)
    let n = board.length
    let m = board[0].length

    let res = []
    let visit = new Set()

    let dfs =(r,c,node,word) =>{
        if(r<0 || c<0 || r>=n || c>=m || visit.has(r+"|"+c) || !node.children[board[r][c]]){
            return
        }

        visit.add(r+"|"+c)
        word = word + board[r][c]
        
        node = node.children[board[r][c]]
        // console.log('new node',node)

        if(node.wordEnd && !res.includes(word)){
            res.push(word)
        }
   

        dfs(r+1,c,node,word)
        dfs(r-1,c,node,word)
        dfs(r,c+1,node,word)
        dfs(r,c-1,node,word)

        visit.delete(r+"|"+c)
    }

    for(let i=0; i<n; i++){
        for(let j=0; j<m; j++){
            dfs(i,j, root, "")
        }
    }

    return res

    
};
