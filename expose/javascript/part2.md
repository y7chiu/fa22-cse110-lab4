# Part 2 Answers

**1. What will happen at line 12 and why? If the code causes an error, explain why.**

Answer: The output print out **3**. It does not print out the discount cost is because it makes console.log to the variable i, which is the count after the for loop reaches the condition and pop out from the for loop.

**2. What will happen at line 13 and why? If the code causes an error, explain why.**

Answer: The output print out **150**. It returns the cost of the price[2] item after discounting.

**3. What will happen at line 14 and why? If the code causes an error, explain why.**

Answer: It outputs the same answer as printing out discountedPrice. The math function and equation make the same answer out.

**4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.**

Answer: It will return nothing. There is no console.log to output the answer so in this case without any errors, there is no output. However, it will return the discounted list to the function call.

**5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).**

Answer: It will output an error that the variable **i** is not defined. Variable **i** is defined inside the for loop and **let** make the variable **i** static in the for loop, so there is no definition of it outside the for loop, so it turns out an error.

```
error: console.log(i);
ReferenceError: i is not defined 
```

**6. What will happen at line 13 and why? If the code causes an error, explain why.**

Answer: Output an error which the reason is the same as Question 5. But, a little different is that the variable is truly defined in the for loop.
```
discountedPrice is not defined.
```

**7.What will happen at line 14 and why? If the code causes an error, explain why.**

Answer: It will output out the discount cost of item 2. The variable finalPrice is defined outside the for loop, so after running the for loop, the operating system will output normally.

**8. What will this function return? Give a brief explanation. If the code causes an error, explain why.**

Answer: There is no error and it will not output anything since there is no console.log. However, it will return the discounted list to the function call.

**9. What will happen at line 11 and why? If the code causes an error, explain why.**

Answer: It outputs an error of **i** is not defined. The reason is that **let** let the variable **i** restrict in the for loop, and there is no definition outside the for loop.

**10. What will happen at line 12 and why? If the code causes an error, explain why.**

Answer: The answer is **3**. It outputs the answer of constant variable. It does not change anything from it, just print out the answer.

**11. What will this function return? Give a brief explanation. If the code causes an error, explain why.**

Answer: It does not output anything since there is no console.log. However, it will return the discounted list to the function call.

--------------------------

**12. Given the above Object, write the notation for:  (These should be in your part2.md)**

**- A. Accessing the value of the name property in the student object**

Answer: student.name;

**- B. Accessing the value of the Grad Year property in the student object**

Answer: student["Grad year"]

**- C. Calling the function for the greeting property in the student object**

Answer: student.greeting()

**- D. Accessing the name property of the object in the Favorite Teacher property in student**

Answer: student["Favorite Teacher"]

**- E. Access index zero in the array of the courseLoad property of the student object**

Answer: student.courseLoad[0]

--------------------------

**13. Arithmetic**

**- A: ‘3’ + 2**

Answer: 32. 

Since integers map to their exact string representation. String + with integer = String

**- B: ‘3’ - 2**

Answer: 1. 

When String - integer, the minus will convert the string to integer.

**- C: 3 + null**

Answer: 3. 

**null** means nothing, so it represents 0. 

3 + 0 = 3

**- D: ‘3’ + null**

Answer: 3null. 

Again, since integers map to their exact string representation. String + with integer = String

**- E: true + 3**

Answer: 4. 

**true** becomes 1, so 1 + 3 = 4.

**- F: false + null**

Answer: 0. 

Both false and null represent 0, so add together will get 0.

**- G: '3' + undefined**

Answer: 3undefined. 

Again, since integers map to their exact string representation. String + with integer = String

**- H: '3' - undefined**

Answer: NAN. 

'3' converts to integer, but undefined does not have value, so it will output **NAN** in this case.

----------------------------

**14. Comparison**

**- A: ‘2’ > 1**

Answer: true.

The string will convert to integer to make the comparison.

**- B: ‘2’ < ‘12’**

Answer: false.

When two stings compare together, we break down the string and compare from first character. In this case, '2' should > '1'.

**- C: 2 == ‘2’**

Answer: true.

The string will convert to integer to make the comparison. 

2 = 2.

**- D: 2 === ‘2’**

Answer: false.

The types between these two variables are different.

**- E: true == 2**

Answer: false.

true will be equals to 1. Therefore, 1 is not equals to 2.

**- F: true === Boolean(2)**

Answer: true.

Same type between true and Boolean(2).

-----------------------------
**15. Explain the difference between the == and === operators.**

Answer: 

**==** is focusing on the comparison of variable larger, equal, or smaller. 

However, **===** is the special operation that checking the variable type between 2 comparision objects are smae type or not.

**16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.  (This should be in a JS file part2-question16.js)**

**17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.**

Answer:

**18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.  (This should be a JS file - part2-question18.js)**

**19. What is the output of the above code? (This should be in your part2.md)**

Answer:
