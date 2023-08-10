class MinStack:

    def __init__(self):
        self.stk = []
        self.min = []
        

    def push(self, val: int) -> None:
        self.stk.append(val)
        if(len(self.min)==0):
            self.min.append(val)
        
        else:
            ele = self.min[len(self.min)-1]
            if(val<=ele):
                self.min.append(val)

        

    def pop(self) -> None:
        ele = self.stk.pop()
        if(ele == self.min[len(self.min)-1]):
            self.min.pop()
        

    def top(self) -> int:
        return self.stk[len(self.stk)-1]
        

    def getMin(self) -> int:
        return self.min[len(self.min)-1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
