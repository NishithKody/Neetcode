class LRUCache {
    constructor(capacity){
        this.cap = capacity
        this.map = new Map()
    }

    get(key){
        if(this.map.has(key)){
            let ele = this.map.get(key)
            this.map.delete(key)
            this.map.set(key,ele)
            return ele
        }
        else{
            return -1
        }
    }

    put(key,value){
        if(this.get(key)===-1){
            if(this.map.size===this.cap){
                for(let keyVal of this.map){
                    this.map.delete(keyVal[0])
                    break
                }
            }
        }

        this.map.set(key,value)

    }
}

// map is js maintains order
//ref- https://www.youtube.com/watch?v=3Z9G5qRmI-I&t=905s
