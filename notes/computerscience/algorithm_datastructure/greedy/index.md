# Tree Notes 


# Greedy Algorithm Introduction

Greedy is an algorithmic paradigm where the solution is built piece by piece. The next piece that offers the most obvious and immediate benefit is chosen. The greedy approach always makes the choice that maximizes the profit and minimizes the cost at any given point. It means that a **locally-optimal choice is made in the hope that it leads to a globally optimal solution**.


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

## 1299. Replace Elements with Greatest Element on Right Side

https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

```java
class Solution {
    public int[] replaceElements(int[] arr) {
        int[] res = new int[arr.length];
        res[arr.length-1] = -1;
        int max = arr[arr.length-1];
        for (int i=arr.length-2; i>=0; i--){
            res[i] = max;   
            max = Math.max(max,arr[i]);
        }
        return res;
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
