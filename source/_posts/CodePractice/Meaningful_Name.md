---
title: 'Clean Code Notes(1) Meaningful Name'
date: 2019-06-27 13:59:52
tags: 
- Code Practice
- Java
categories: 
- Software Development
notshow: true
---

This is the note that I took when reading Clean Code: A Handbook of Agile Software Craftsmanship by Robert C. Martin.

# Overview

The name of variable, function and class name should tells its function.
If commenting is used, then this is not a good variable name.


## Use Intention-Revealing Names

### Example 1: Variable name
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

### Example 2: Variable name inside a function
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
  1. What kinds of things are in theList?
  2. What is the significance of the zeroth subscript of an item in theList?
  3. What is the significance of the value 4?
  4. How would I use the list being returned?

The answers of above question are not present in the code sample, but they could have been. 

Imaging this piece code is a mine sweeper game. 
Each cell on the board is represented by a simple array. We further find that the zeroth subscript is the location of a status value and that a status value of 4 means “flagged.” Just by giving these concepts names we can improve the code considerably

```
// Good Example
public List<int []> getFlaggedCells(){
    List<int []> flaggedCells = new ArrayList<int[]>();
    for (int[] cell : gameBoard)
        if (cell[STATUS_VALUE] == FLAGGED)
            flaggedCells.add(cell);
        return flaggedCells;
}
```

```
// Even better example
public List<Cell> getFlaggedCells(){
    List<Cell> flaggedCells = new ArrayList<Cell>();
    for (Cell cell : gameBoard)
        if (cell.isFlagged())
            flaggedCells.add(cell);
        return flaggedCells;
}
```

## Avoid Disinformation

* Avoid to use common reserved name, even the reserved name is in other coding system.
* Do not refer a grouping of accounts as an accountList. This will give false impression that you are using a List data structure. It is not recommend even if you use List data structure.
* Be aware of using name that vary in small ways. Ex) **XYZControllerForEfficientHandlingOfStrings vs XYZControllerForEfficientStorageOfStrings**. This 
* Don't use l, O, o as variable. They will be misleading.

## Make Meaningful Distinctions

It is not sufficient to add number series or noise words, even though the compiler is
satisfied. If names must be different, then they should also mean something different.

```
// Bad example
getActiveAccount();
getActiveAccounts();
getActiveAccountInfo();
```

## Use Pronounceable Name
All the variable should be pronouceable for future group discussion.

## Use Searchable Name
Single-letter names and numeric constants have a particular problem in that they are not easy to locate across a body of text. 

Thus, for any variable that appears in multiple location (not local variable), we should give a searchable name. 

Bad Example:
```
for (int j=0; j<34; j++) {
    s += (t[j]*4)/5;
}
```

Good Example
```
int realDaysPerIdealDay = 4;
const int WORK_DAYS_PER_WEEK = 5;
int sum = 0;
for (int j=0; j < NUMBER_OF_TASKS; j++) {
    int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
    int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);
    sum += realTaskWeeks;
}
```

