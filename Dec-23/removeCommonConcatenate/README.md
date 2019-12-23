Given two strings s1 and s2. Modify string s1 such that all the common characters of s1 and s2 is to be removed and the uncommon characters of s1 and s2 is to be concatenated.

Note: If no modification is possible print -1.

Input:
The first line consists of an integer T i.e number of test cases. The first line of each test case consists of a string s1.The next line consists of a string s2. 

Output:
Print the required output.

Constraints: 
1 <= T <= 200
1 <= |Length of Strings| <= 104

Example:
Input:
2
aacdb
gafd
abcs
cxzca

Output:
cbgf
bsxz

Explanation:
Testcase 1:
The common characters of s1 and s2 are: a, d.
The uncommon characters of s1 and s2 are: c, b, g and f. Thus the modified string with uncommon characters concatenated is: cbgf
