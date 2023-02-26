var MedianFinder = function() {
    this.minQ = new MinPriorityQueue()
    this.maxQ = new MaxPriorityQueue()
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

    if(this.maxQ.size()==0 || num<this.maxQ.front().element){
        this.maxQ.enqueue(num)
    }
    else{
        this.minQ.enqueue(num)
    }

    if(this.maxQ.size() - this.minQ.size()>=2){
        let ele = this.maxQ.dequeue().element
        this.minQ.enqueue(ele)
    }

    if(this.minQ.size() - this.maxQ.size()>=2){
        let ele = this.minQ.dequeue().element
        this.maxQ.enqueue(ele)
    }
    
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.minQ.size() > this.maxQ.size()){
        return this.minQ.front().element
    }
    else if(this.minQ.size() < this.maxQ.size()){
        return this.maxQ.front().element
    }
    else{
        let a =  this.minQ.front().element
        let b =  this.maxQ.front().element
        return (a+b)/2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
