class TrieNode  {
    constructor(){
        this.children = []
        this.wordEnd = false
    }
}

class WordDictionary {
    constructor(){
        this.root = new TrieNode()
    }

    addWord(word){
        let cur = this.root;
        
        for(let c of word){
            if(!cur.children[c]){
                cur.children[c] = new TrieNode()
            }
            cur = cur.children[c]
        }
        cur.wordEnd = true;
    }

    search(word){

        let dfs = (node, j) =>{
            console.log('dfs start -------')
            if(j==word.length ){
                console.log('len check',word)
                console.log(node.wordEnd)
                return node.wordEnd;
            }

            let char = word[j]
            if(char==='.'){
                console.log('check',node.children)
                for(let child of node.children){
                    console.log('the child',child)
                    if(dfs(child, j+1)){
                        return true
                    }
                }
                console.log('return false from dot check', word,node,j)
                return false
            }
            else{
                console.log('In normal flow',node,j)
                if(!node.children[char]){
                    console.log('return false from normal check', word,node,j)
                     return false
                }
                   
                return dfs(node.children[char],j+1)
            }

        }

        return dfs(this.root,0)
        
    }
}
