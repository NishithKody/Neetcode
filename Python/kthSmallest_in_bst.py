# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:

        global res
        res = []

        def util(node):
            if(node==None):
                return
            
            util(node.left)
            res.append(node.val)

            util(node.right)
        

        util(root)
        
        return res[k-1]
