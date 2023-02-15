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
            if(j==word.length ){
                return node.wordEnd;
            }

            let char = word[j]
            if(char==='.'){
                for(let child of Object.keys(node.children)){
                    if(dfs(node.children[child], j+1)){
                        return true
                    }
                }
                return false
            }
            else{
                if(!node.children[char]){
                     return false
                }
                   
                return dfs(node.children[char],j+1)
            }

        }

        return dfs(this.root,0)
        
    }
}
