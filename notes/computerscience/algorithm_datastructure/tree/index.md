# Tree Notes 


# Tree Introduction
Trees consist of vertices (nodes) and edges that connect them. It has no cycle, and is hierarchical.



# Binary Tree

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




