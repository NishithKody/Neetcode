/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.pq =new MinPriorityQueue();
    for(let i =0; i<nums.length; i++){
        this.pq.enqueue(nums[i])
    }

    this.k = k

    while(this.pq.size()>k){
        this.pq.dequeue().element;
    }
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {

    this.pq.enqueue(val)
    while(this.pq.size()>this.k){
        this.pq.dequeue().element;
    }

    return this.pq.front().element;
    
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
