class MinStack {
   stack;
   minS;
    constructor() {
         this.stack = [];
         this.minS = [];
    }

    push(val: number): void {
        this.stack.push(val)

        if(this.minS.length==0 || val<=this.minS[this.minS.length-1]){
            this.minS.push(val)
        }

    }
    pop(): void {
        let val = this.stack.pop()
        if(val == this.minS[this.minS.length-1]){
            this.minS.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length-1]
    }

    getMin(): number {
        return this.minS[this.minS.length-1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
