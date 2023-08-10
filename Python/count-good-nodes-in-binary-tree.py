# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:

       
        res  = 0

        def util(node,max):
            nonlocal res
            if(node == None):
                return

            ele = node.val
            if(ele >=max):
                res = res +1
                max = ele
            util(node.left, max)
            util(node.right, max)
        
        util(root, root.val)
        return res

    

            


