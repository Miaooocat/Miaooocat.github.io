---
title: 'Java Study Notes(21) Clean Code'
date: 2019-09-21 13:59:52
tags: 
- Java
categories: 
- Software Development
- Java Programming
notshow: true
---

# Commenting
* Should illuminate and explain 
* Should not detract, distract, misinform
* Often difficult to maintain properly
* Comments do not make up for bad code

## Good Commenting

1. Legal purposes: Copyright or authorship comments.
2. Warning of consequences: Ex. Not thread safe, takes long to run, etc
3. TODO comments: Reminders to do something that cannot be handled at the moment



## Bad Commenting
1. Mumbling
2. Redundant/Noise
3. Misleading
4. Mandated
5. Journal - Logs of changes to the code. Old practice
6. Nonobvious Connection - Not obviously relevant to the code it is next

# Meaningful Names

The name of variable, function and class name should tells its function.
If commenting is used, then this is not a good variable name.

## Example 1: Variable name
```
// Bad Example
int d; // Calculate elapsedTimeInDays
```
```
// Good Example
int elaspsedTimeInDays;
int daysSinceCreation;
int daysSinceModification;
int fileAgeInDays;
```

## Example 2: Variable name inside a function
```
// Bad Example
public List<int []> getThem(){
    List<int []> list1 = new ArrayList<int[]>();
    for (int[] x : theList)
        if (x[0] == 4)
            list1.add(x);
        return list1;
}
```
The above code is really hard for people to understand if not providing context. There are 4 major question about the above code.
    1. What is inside theList
    2. What is the meaning of theList[0]
    3. What is the meaning of 4
    4. How can I use the returned List.
```
// My attempt
public List<int []> getThem(){
    List<int []> list1 = new ArrayList<int[]>();
    for (int[] x : theList)
        if (x[0] == 4)
            list1.add(x);
        return list1;
}

```
# Formatting

## Indentation


# Module Organization