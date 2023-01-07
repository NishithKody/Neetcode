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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    return util(p,q)

};

let util = (p,q)=>{

    if(!p && !q)
        return true;

    if(!p || !q)
        return false;

    if(p.val != q.val)
        return false;
    
    return (util(p.left, q.left) && util(p.right, q.right))

}
