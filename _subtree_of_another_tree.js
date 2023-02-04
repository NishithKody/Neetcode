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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(!subRoot){
        return true
    }

    if(!root){
        return false;
    }
    
    if(util(root, subRoot)){
        return true;
    }

    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot))
    
};
let util = (node,sub)=>{
    if(!node && !sub){
        return true
    }

    if(node && sub && node.val == sub.val){
        return (util(node.left, sub.left) && util(node.right, sub.right))
    }

    return false

}

