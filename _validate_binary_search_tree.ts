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

function isValidBST(root: TreeNode | null): boolean {

    return util(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY )
};

let util = (node, minVal, maxVal) =>{

    if(node==null)
        return true;
    
    if(node.val<minVal || node.val>maxVal)
    {
        return false;
    }

    let leftVal = util(node.left, minVal, node.val -1)

    let rightVal = util(node.right, node.val +1, maxVal)

    return (leftVal && rightVal)



}
