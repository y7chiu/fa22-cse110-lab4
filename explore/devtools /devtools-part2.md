**1. What was the bug?**

Answer: num1 and num2 become the string that bother strings add together will become string.

**2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.**

Answer: The error is that the num1 and num2 by using document.getElementById("num1").value will return the string type, so what I did is that I use parseInt to make num1 and num2 convert into the integers so that the caluclation could operate normally.
