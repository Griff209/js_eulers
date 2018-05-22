# js_eulers
JS programs I wrote to solve problems from Project Euler

# 1_multiples.js

Task: 
Find the sum of all the multiples of 3 or 5 below 1000.

Solution: 
The mostly-imperative style program arrives at a solution by breaking the task into the following pieces:

1. Check all integers less than 1000:  
Start a while loop at 999, decrementing by 1 at each iteration, ending at i = 0
2. Determine if a number is a multiple of 5:  
True if number modulo 5 is equal to 0
3. Determine if a number is a multiple of 3:  
True if number modulo 3 is equal to 0
4. Collect the multiples of 3 or 5:  
Push integer into an array if it passes the test in step 2 or step 3
5. Sum the collection of multiples:  
Use Array.prototype.reduce to reduce the collection to the sum of its parts

# 2_fibonacci.js

Task: 
Find the sum of all even members (whose value is no greater than 4,000,000) of the Fibonacci sequence 

Solution: 
The recursive program arrives at a solution by breaking the task into the following pieces:

1. Build the fibonacci sequence:  
Each term in the Fibonacci sequence is simply the sum of the preceding two terms. Starting in line 8, fibonacci() takes the current sequence, stores a copy with Array.prototype.slice(), and produces the next term by popping 2 terms from the copy and summing them. 

Operating on a copy as opposed to the original sequence preserves the order and accuracy of the sequence with minimal effort. 

The next term is pushed into the sequence and the function calls itself using the new sequence and a decremented count argument (to guard against infinite recursion). This can all be done in an imperative style using loops, but I prefer the elegance and simplicity of the recursive style.   
2a. Stop building the sequence when an upper limit on the value of a term is reached:
2b. Stop building the sequence when the designated number of terms has been reached:  
