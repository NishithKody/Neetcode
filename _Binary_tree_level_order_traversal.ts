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

let res = []
let q=[]
function levelOrder(root: TreeNode | null): number[][] {

    if(root==null){
        return []
    }
    let q =[]
    let res = []
    q.push(root)

    while(q.length!=0){
        let len = q.length;

        let cur=[]
        for(let i=0; i<len;i++){

            let value = q.shift();
            cur.push(value.val)
            if(value.left){
                q.push(value.left)
            }

            if(value.right){
                q.push(value.right)
            }

        }

        res.push(cur)

    }

    console.log(res)

    return res
};
