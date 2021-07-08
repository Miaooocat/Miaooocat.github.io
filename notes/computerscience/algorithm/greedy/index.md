# Tree Notes 


# Greedy Algorithm Introduction
Trees consist of vertices (nodes) and edges that connect them. It has no cycle, and is hierarchical.


## 455. Assign Cookies

https://leetcode.com/problems/assign-cookies/

```java
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        int i = 0;
        Arrays.sort(g);
        Arrays.sort(s);
        for (int j = 0;i<g.length&&j<s.length;j++){
            if (g[i]<=s[j]){
               i++; 
            }
        }
        return i;
    }
}
```


## 55 Jump Game

https://leetcode.com/problems/jump-game/

```java
class Solution {
    public boolean canJump(int[] nums) {
        int max = 0;
        for (int i=0; i<nums.length; ++i) {
            if (i > max) return false;
            max = Math.max(max, i + nums[i]);
        }
        return true;
    }
}
```
