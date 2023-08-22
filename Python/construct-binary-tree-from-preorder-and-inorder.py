# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# 3 9 20 15 7
# 9 3 15 20 7


class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:

        def util(preorder, inorder):

            if(len(preorder)==0 or len(inorder)==0):
                return None
            
            newNode = TreeNode(preorder[0])
                
            mid = inorder.index(preorder[0])
            newNode.left = util(preorder[1:mid+1], inorder[0:mid])
            newNode.right = util(preorder[mid+1:] ,inorder[mid+1:])

            return newNode
        
        res = util(preorder, inorder)
        return res
