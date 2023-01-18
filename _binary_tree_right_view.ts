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

function rightSideView(root: TreeNode | null): number[] {
    let res = []
    let q = []
    
    if(root == null)
        return res
    
    q.push(root)

    while(q.length!=0){
        let size = q.length
        for(let i =0; i<size; i++){
            let n = q.shift();

            if(i==size-1){
                res.push(n.val)
            }
            if(n.left!=null){
                q.push(n.left)
            }
            if(n.right!=null){
                q.push(n.right)
            }
        }
    }

    return res


};
