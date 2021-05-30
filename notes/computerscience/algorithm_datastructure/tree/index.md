# Tree Notes 


# Tree Introduction
Trees consist of vertices (nodes) and edges that connect them. It has no cycle, and is hierarchical.





# Binary Tree Structure

```java
public class BinaryTreeNode {
    int val;
    BinaryTreeNode left;
    BinaryTreeNode right;
    BinaryTreeNode() {}
    BinaryTreeNode(int val) { this.val = val; }
    BinaryTreeNode(int val, BinaryTreeNode left, BinaryTreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
 }
```

## Preorder traversal

https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/

```java
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        preorderTraversalHelper(root,res);
        return res;
    }
    
    public void preorderTraversalHelper(TreeNode root, ArrayList<Integer> res){
        if (root!=null){
            res.add(root.val);
        if (root.left !=null) preorderTraversalHelper(root.left, res);
        if (root.right != null)preorderTraversalHelper(root.right, res);
        }
    }
}
```

### Non-Recursive

```java
```


## In Order traversal

Leetcode 94
https://leetcode.com/problems/binary-tree-inorder-traversal/

### Recursive

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        ArrayList<Integer> res = new ArrayList<Integer>();
        inorderTraversalHelper(root,res);
        return res;
    }
    
    public void inorderTraversalHelper(TreeNode root,ArrayList<Integer> res){
        if (root != null) {
            if (root.left!=null){inorderTraversalHelper(root.left,res);}
            res.add(root.val);
            if (root.right!=null){inorderTraversalHelper(root.right,res);}
        }
    }
}

```
### Non-Recursive

```java
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode cur = root;
        while(cur!=null || !stack.empty()){
            while(cur!=null){
                stack.add(cur);
                cur = cur.left;
            }
            cur = stack.pop();
            res.add(cur.val);
            cur = cur.right;
        }
    return res;
    }
}
```

## Check if is same tree

Leetcode 100
https://leetcode.com/problems/same-tree/

```java
class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        return p.val == q.val?isSameTree(p.left,q.left) && isSameTree(p.right,q.right):false;

    }
}
```
