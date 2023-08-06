# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def leftCheck(node, max, min): 
            if(node == None):
                return True
            
            if(node.val>=max or node.val<=min):
                return False
            
            left = leftCheck(node.left, node.val, min)
            right = rightCheck(node.right, max, node.val)

            return left and right
        

        def rightCheck(node, max, min):

            if(node == None):
                return True
            
            if(node.val>=max or node.val<=min):
                return False
            
            left = leftCheck(node.left, node.val, min)
            right = rightCheck(node.right, max, node.val)

            return left and right


        def util(node):

            if(node==None):
                return True
            
            left = leftCheck(node.left, node.val, -math.inf)
            
            right = rightCheck(node.right, math.inf, node.val)

            return left and right
        
        res = util(root)

        return res

            


        

        
