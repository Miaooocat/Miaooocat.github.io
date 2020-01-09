---
title: 'Syntax of Unix'
date: 2019-06-06 18:06:52
tags: Unix
categories: 
- Operating System
- Unix
notshow: true
---
# About this page
This page is about the use of vi editor and some basic syntax in UNIX.

# The vi Editor
2 modes of operation
	- Command mode: Input the commend
	- Input mode: Input to the document

## vi Command
Esc - Switch to existing model

### Switch to Input Model
```
i - Moves to input mode
I - Moves to input mode ñ insert at start of line
a - Moves to input mode
A - Moves to input mode ñ append at end of line
o - Moves to text mode - opens up a new line below cursor
O - Moves to text mode - opens up a new line above cursor
```
### Useful Command
```
x - Delete a character
nx - Delete n characters where n is any number
dw - Delete a word
ndw - Delete n words where n is any number
dd - Delete or cut a line
ndd - Delete n lines where n is any number   
yy - Copies a line into a buffer ñ ex: 3yy will copy 3 lines
yw - Copies a word into a buffer ñ ex: 7yw copies 7 words
p - Paste the copied lines 
u - undo
CTRL-r - redo
/xyz -search for "xyz"    n for next)
. - do the last command again
```
### Navigation Command
```
:1 - Take me to the first line
:n - Take me to the nth line
G - Take me to the bottom of the file
h  (left cursor)
j   (cursor down)
k   (cursor up)
l    (cursor right)
```
### Saving work
```
:w   -   Write out data from the buffer to a file
:wq -   Write out data and exit
:x    -   Write out data and exit (same as previous)
:q   -    Quits editor as long as no changes have been made
:q!  -    Quits abandoning any changes.
Shift zz (write and quit)
```


# UNIX
## UNIX File Control
Here are some UNIX basic file control command.
```
mkdir [OPTION] DIRECTORY  # Create directory
touch [OPTION] FILE       # Create file
cd DIRECTORY              # Move to directory
ls [OPTION] [FILE]        # Display the list of file in current directory
tree                      # Display the file system as tree
rm [OPTION] FILE          # Remove file
rmdir [OPTION] DIRECTORY  # Remove directory
mv                        # Move file or change name 
```

## UNIX Filename
Here are some abbreviations that can be used to simplify long path names for files and directories:
```
.  # The current working directory 
.. # The directory above the current working directory Example: cd .. (go back to parent)
~  # Your home directory Example: ls ~/ (start from home dir)
*  # Matches any string of characters
{} # Work for brace expansion to create mutiple file with similar name 
[] # To **match single character** within the range of [] Example: [a-zA-Z] (The range is depends on ascii table)
[!] # To **exclude this single character** within the []
? # To match any single character, except a leading dot
\ # To not evaluate any letter as a wild card
```

## UNIX Basic Command

### echo  (Print things out.)

```
echo hello
echo -n hello # omit new line character
echo -e "tab \t This lets you use escape characters \n\n" # Print in format
```

### Browse file
#### less path/filename
```
To scroll forward and backwards through a file.
Ex: less /etc/passwd
```

#### more path/filename
To scroll forwards through a file.
Ex: more /etc/passwd

#### cat path/filename 
To display the contents of a file or files as one continuous stream
Ex: cat /examples/lionsInTheStreet


#### head path/filename
To retrieves the first 10 lines
head -5 /examples/lionsInTheStreet 	(Display number of line)
head -c100 /examples/lionsInTheStreet 	(Display number of character)

### tail path/filename
To retrieves the last 10 lines
tail -5 /examples/lionsInTheStreet 	(Display number of line)		
tail ñc20 /examples/lionsInTheStreet  (Display number of character)

### cut: 
```
To cut a portion from each line of a file.  
cut -c2 /examples/lionsInTheStreet (cut the 2nd character out)
cut -c-5 /examples/lionsInTheStreet (cut the first 5 character out)
cut -c5- /examples/lionsInTheStreet (cut the last 5 character out)
cut -c3-7 /examples/lionsInTheStreet (cut the character from 3 to 7 out)
cut -c3,7 /examples/lionsInTheStreet (cut the character of line 3 and 7 out)
cut -d ":" -f2 /etc/passwd   (-d: cut by the deliminator || -f: print only the designated field)
cut -d ":" -f2,4 /etc/passwd 
cut -d ":" -f2-4 /etc/passwd
```

### sort
```
Sort file in alphabetic
sort /examples/lionsInTheStreet 
sort -r /examples/lionsInTheStreet (sort reverse)
sort -k2 /examples/lionsInTheStreet (sort based on second field)
sort -t":" -k3 /student_files/brokers.dat
sort -t":" -k2,3 /student_files/brokers.dat
sort -r -n -t":" -k4 accounts (-n sort by number (default is ascii code), -t provide deliminator,  -k provide the fields, -r is reverse) 
```


### uniq: removes repeated lines. (Only work for adjacent)
```
uniq lionsU
uniq -c lionsU (Remove repeating thing and give number of occurance)
uniq -d lionsU (Only show repeated line)
```
### basename (Not a way to check if a file existed)
To removes the path and returns the base name for a file.  
```
basename /student_files/day1/module6/logs
```
### dirname
To removes the file base name, and returns the path
```
dirname /student_files/day1/module6/logs
```
### readlink
To return the cuurent absolute path and the name you put
```
readlink -m lionsU
```

### Links
ln 
To create hard link to a file which actually refers to the same physical data location, and will be always linked even when the original file is moved.
```
ln lionsU lionsUhl
```

ln -s
To create soft link to a file that acts as a reference pointer to another file or directory, and when the original file  moved, the soft link will not be updated.
```
ln -s lionsU lionsUsl
```

### Chmod
```
-rw-r--r-- 1 shihao.miao domain^users  123 Jun  5 17:27 account
First field if - then is regular
-User(rw-)Group(r--)Other(r--)
r- read, w-write, x-exeutable
```

#### Symbolic method
```
chmod u+x myfile (add permission)
chmod u-x myfile (remove permission)
chmod u=rwx,g=rx,o=r myfile
```

### Numerical method
```
4 - r	(Read)
2 - w	(Write)
1 - e	(Execution)
chmod 777 (unlock all permission)
chmod 000 (lock all permission)
```

### Find
Find: finds Files or Directories recursively.
```
find lionsU
find . -name f1
find . -size -10k (File less than 10 kb)
find . -size +10k (File more than 10 kb)
find . -type f -size +10k
find . -mtime -2 (anything is modified in last two day)
find . -mmin -60 
find . -mmin +60 (anything is not modified in last 60 min)
find . -name "The*" -exec rm {} \; (Find file name in each directory and then delete them, {This entry is thing find by find command})
find . -name "The*" -exec rm -i {} \;
```

## Rediction 
```
ls -o > rootfile (Overwrite)
ls -o >> rootfile (Appending)
Command 2> destination (Redirect stderror to certain file)
```
## Piping 
```
ls -o | wc -l (Pipe the output from previous statement to latter statement)
```

### tee
```
ls | tee out.txt (Overwrite the file and print to screen as well)
ls | tee -a out.txt (Append to the file and print to screen as well)
```


### tr
```
echo "Hello World" | tr "l" "p"

tr: replace a pattern with another one.
echo James:Taylor | tr ":" " "
echo chris | tr crh Evl
cat lionsU | tr [:lower:] [:upper:]
echo hello | tr -d h
cat lionsU | tr -d a-h
echo NA1234567D | tr -d [:alpha:]
echo ABBBBBBD | tr ñs ìBî
```

## <,<<,<<<


### < Here-file

### << Here-document (Need EOF)
```
cat<<eof
		ATM
	-----------
	1.Deposit
	2.Withdraw
eof
```

### <<< Here String
```
wc <<< "Test"
```


## Pattern Matching and Searching

# grep --  **grep is looking for lines**
```
-grep - search for string or pattern (based on regular expressions)
-egrep - search for string or pattern (based on extended regular expressions)
-fgrep - search for a string only (no special characters)
```

### fgrep "pattern or string" [file]
```
fgrep "searches file(s) for lines that match a fixed string.
fgrep "roaming" /examples/lionsInTheStreet
fgrep "in?" /examples/lionsInTheStreet
```

### grep [-options] pattern filename
```
grep hall /student_files/day1/grepFile (Look for pattern, it will match word like dwaWhall)
grep -w hall /student_files/day1/grepFile (Look for pattern, it will match only word "hall" **Case Sensitive**)
grep -n hall /student_files/day1/grepFile (Print number of line that matchs)
grep -v hall /student_files/day1/grepFile (Inverse Give all line that does not match the pattern)
grep -c hall /student_files/day1/grepFile (tells the count)
grep -i hall /student_files/day1/grepFile (non-case sensitive)
```



### Regular Expression (Only used for grep in UNIX)
```
^ -- match at start of line
Example: grep "^hall" filename  
(It matches only at the beginning of the line. 
The ^ always at the beginning)
```
```
$ -- match at end of line 
Example: grep "hall$" filename
```
```
[] -- match any one of value in the bracket
Example: grep "h[Aa]ll" filename
```
```
. -- match any single character
Example: grep "h.ll" filename
```
```
[^] -- Match a single character with any character not in range
Example: grep "h[^ae]ll" filename
```
```
* -- Match zero or more occurrences of the preceding character
Example: grep "ha*" filename  ()
```
```
.* -- Match with any number of characters
Example:
```
```
\ -- Escape the metacharacter and treat them as a literal
Example: grep '6\.' /student_files/day1/grepFile  (it only match 6.3 6.33...)
Example: grep '6.' /student_files/day1/grepFile  (it matches 6.3 66 65...)
```
```
[[:lower:]]
[[:upper:]]
[[:digit:]]
[[:alpha:]]
[[:alnum:]] # alpha + number
```

### egrep adds more functionality in regular expression
```
+ -- similar to *, but it need to match **one or more** character
? -- similar to *, but it only match **zero or one** character
(adsa|b) This match adsa or b -- Similiar to [] but () can have multiple character
{n} A fixed number of the thing to my left
Example: egrep "ha{30}ll" filename
Example: egrep "h[ab]{30}11" filename
{n,m} A fixed number of the thing in this range to my left
```
# Shell Variable

If a variable has not been initialized, it will show up as blank.
Variable is evaluted before the command runs

```
To set up variable

name="John" (No space around the equal sign)

To use variable
echo $name

echo $name7 (It will ask for variable name7)
echo $name"7" 
echo ${#name} (It will return the number of charcter in the name variable) 
```
# Arithmetic Expansion
```
echo $((5+2))
echo $[5+2]
echo $[4+3*2]
echo "scale=3; 5/3" | bc (3 decimal)
bc <<< ìscale=3; 5/3î
```

# Command Substitution
Command substitution allows the output of a command to replace the command itself. 

Display the balance of Sheldon Cooperís account in the following format: Your Current balance is:  
```
echo "Your Current balance is: $(grep "Sheldon Cooper" accounts | cut -d ":" -f4)"
```

Assign the balance of Sheldon Cooperís account to variable balance
```
balance=$(grep "Sheldon Cooper" accounts | cut -d ":" -f4)
``` 
head -5 file | tail -1  (to get line 5)

# System and Process Commands
```

ps     			displays YOUR processes
ps -f  		displays more information on YOUR processes
ps  --forest  	displays processes and shows their relationship
ps -u username
ps -e  		displays ALL system processes
top     	real time interactive list of SYSTEM processes - quit with q
kill processid  
kill -9   processid    (kill serious)
jobs   			displays active jobs
fg  jobnumber	brings a background process to the foreground
bg jobnumber	runs a process in the background
sleep 20		pauses for 20 seconds
Ctrl-C   		terminates the current foreground process
Ctrl-Z 		stops the current foreground process and leave it in the background
sleep 20 &   	runs in the background
kill %jobnumber    uses the job number ñ ìJIDî
```
## To make a program run in background
&
Example: sleep 10 &

# Environment variable
```
COMPANYNAME = "ABC Group" (Same as set local variable, capital letter is for convention)
export COMPANYNAME  (Put it to the env)
```