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

function kthSmallest(root: TreeNode | null, k: number): number {
    let res=[]

    let dfs = (node)=>{

        if(node==null)
            return
        
        dfs(node.left)
        res.push(node.val)
        // console.log('--',res)
        dfs(node.right)


    }
    dfs(root)

    // console.log('final',res)
    return res[k-1]

};
