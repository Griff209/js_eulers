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
a. Each term in the Fibonacci sequence is simply the sum of the preceding two terms. Starting in line 8, the function takes the current sequence and stores a copy with Array.prototype.slice(). Operating on a copy as opposed to the original sequence preserves the order and accuracy of the sequence with minimal effort.  
b. Produce the next term by popping 2 terms from the copy and summing them.  
c. The next term is pushed into the original sequence.  
d. The function calls itself using the updated sequence and a decremented count argument. This can all be done in an imperative style using loops, but I prefer the elegance and simplicity of the recursive style.

2. Stop building the sequence when an upper limit on the value of a term is reached:  
a. Before building the sequence, the function checks the most recent value against a designated limit. If the last value in the sequence exceeds the limit, it is popped and discarded, and the function returns. Together with the count parameter, the limit guards against infinite recursion.  
b. Stop building the sequence when the designated number of terms have been calculated:
An alternative base case. User may designate a particular number of terms to be calculated, as opposed to an upper bound on the value of the greatest term. Strictly unnecessary in this task but helpful for experimentation and for use of the fibonacci function outside of the particular constraints of the task.

3. Filter odd numbers out of the sequence:  
As each term in the sequence depends upon the preceding two terms, even terms cannot easily be discarded while the sequence is being created. Instead, a simple Array.prototype.filter is applied to the completed sequence: (term => term % 2 === 0). Here we build on the knowledge gained in Task 1, making use of the modulo operator to find even numbers.

4. Sum the collection of odd terms:  
Use Array.prototype.reduce to reduce the collection to the sum of its parts - again building on the knowledge gained in Task 1.
