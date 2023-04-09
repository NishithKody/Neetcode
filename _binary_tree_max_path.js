/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {

    let res = [root.val]

    let dfs = (root)=>{
        if(!root)
            return 0
        
        let leftMax = dfs(root.left)
        let rightMax = dfs(root.right)

        let leftMax2 = Math.max(leftMax,0)
        let rightMax2 = Math.max(rightMax,0)

        let val = root.val + leftMax2 + rightMax2;
        res[0] = Math.max(res[0], val)

        return root.val + Math.max(leftMax2,rightMax2)
    }
    
    dfs(root)
    return res[0]
};
