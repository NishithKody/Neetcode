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

function goodNodes(root: TreeNode | null): number {

    let count =0;

    let dfs = (node,value) =>{
        if(node==null)
            return
        
        if(node.val >=value){
            count++;
            dfs(node.left, node.val)
            dfs(node.right, node.val)
        }
        else{
            dfs(node.left,  value)
            dfs(node.right, value)
        }

    }

    dfs(root, root.val)

    return count;

};
