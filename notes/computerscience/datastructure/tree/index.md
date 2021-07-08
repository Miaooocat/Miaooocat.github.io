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

### Iterative

```java
public List<Integer> preorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    Deque<TreeNode> stack = new ArrayDeque<>();
    TreeNode cur = root;
    while(!stack.isEmpty() || cur != null) {
        if(cur != null) {
            stack.push(p);
            // Add before going to children
            result.add(p.val);  
            cur = cur.left;
        } else {
            TreeNode node = stack.pop();
            cur = node.right;   
        }
    }
    return result;
}
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

### Iterative

```java
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    Deque<TreeNode> stack = new ArrayDeque<>();
    TreeNode cur = root;
    while(!stack.isEmpty() || cur != null) {
        if(cur != null) {
            stack.push(cur);
            cur= cur.left;
        } else {
            TreeNode node = stack.pop();
            // Add after all left children
            result.add(node.val);  
            cur = node.right;   
        }
    }
    return result;
}
```


## Postorder traversal

### Recursive

```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<Integer>();
        postorderTraversalHelp(root, res);
        return res;
    }
    
    public void postorderTraversalHelp(TreeNode node,List<Integer> res){
        if (node != null){
        postorderTraversalHelp(node.left, res);
        postorderTraversalHelp(node.right, res);
        res.add(node.val);
        }
    }
}
```

### Iterative

```java
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        LinkedList<Integer> result = new LinkedList<>();
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode cur = root;
        while(!stack.isEmpty() || cur != null) {
            if(cur != null) {
                stack.push(cur);
                result.addFirst(cur.val);
                cur = cur.right;
            } else {
                TreeNode node = stack.pop();
                cur = node.left;
            }
        }
        return result;
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
