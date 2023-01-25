/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function diameterOfBinaryTree(root: TreeNode | null): number {

    let dia = 0;

    let dfs = (node)=>{
        if(node==null){
            return 0
        }

        let left = dfs(node.left)
        let right = dfs(node.right)
        dia = Math.max(dia,left+right)
        return Math.max(left,right)+1
    }
    dfs(root)
    return dia

};


