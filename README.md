# js_eulers
JS programs I wrote to solve problems from Project Euler

# 1_multiples.js

Task: 
Find the sum of all the multiples of 3 or 5 below 1000.

Solution: 
The program arrives at a solution by breaking the task into pieces:

1. Check all integers less than 1000:

Start a while loop at 999, decrementing by 1 at each iteration
2. Determine if a number is a multiple of 5:

True if number % 5 is equal to 0
3. Determine if a number is a multiple of 3: 

True if number % 3 is equal to 0
4. Collect the multiples of 3 or 5: 

Push integer into an array if it passes the test in step 2 or step 3
5. Sum the collection of multiples: 

Use Array.prototype.reduce to reduce the collection to the sum of its parts
