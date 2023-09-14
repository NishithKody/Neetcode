# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:

        if(root==None ):
            return []

        q = deque()
        res = []
        prev = None

        q.append(root)

        qlen = len(q)
        
        while(len(q)>0):
            l = len(q)

            while(l>0):
                item = q.popleft()
                prev = item

                if(item.left!=None):
                    q.append(item.left)
                
                if(item.right!=None):
                    q.append(item.right)

                l=l-1
            
            res.append(prev.val)
        

        return res
