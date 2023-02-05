class TreiNode {
    constructor(val = null){
        this.val = val;
        this.children = []
        this.isEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new TreiNode();
    }

    insert(word){
        let cur = this.root
        for(let c of word){
            if(!cur.children[c]){
                cur.children[c] = new TreiNode(c)
            }
            cur = cur.children[c]
        }
        cur.isEnd = true;
    }

    search(word){
        let cur = this.root
        for(let c of word){
            if(!cur.children[c])
            {
                return false;
            }
            cur =cur.children[c]
        }
        return cur.isEnd;
    }

    startsWith(word){
        let cur = this.root
        for(let c of word){
            if(!cur.children[c])
            {
                return false;
            }
            cur =cur.children[c]
        }
        return true;
    }
    
}
