# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:

        res  = 0

        def util(node):
            nonlocal res
            if(node == None):
                return 0

            left = util(node.left)
            right = util(node.right)

            res = max(res, left+right)

            return max(left,right)+1
        
        
        util(root)

        return res
