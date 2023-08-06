# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        global q
        global res
        
        q = deque()

        res = []

        if(root == None):
            return res

        q.append(root)

        while(len(q)>0):
            
            s = len(q)
            cur = []

            while(s>0):
                ele = q.popleft()
                cur.append(ele.val)
                if(ele.left!=None):
                    q.append(ele.left)
                
                if(ele.right!=None):
                    q.append(ele.right)
                
                s=s-1
            
            res.append(cur)
        

        return res


