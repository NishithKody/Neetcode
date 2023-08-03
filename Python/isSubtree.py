# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        res = False

        def util(n1,n2):

            if(n1 == None and n2 == None):
                return True
            elif(n1==None or n2 == None):
                return False
            elif(n1.val != n2.val):
                return False
            
            left = util(n1.left, n2.left)
            right = util(n1.right, n2.right)
        
            return left and right
        
        def check(node, subNode):

            if(node == None):
                return False   

            if(node.val == subNode.val):
                ch = util(node, subNode)
                if(ch == True):
                    return True
            
            left = check(node.left, subNode)
            right = check(node.right, subNode)
            return left or right
        
        return check(root, subRoot)
        

