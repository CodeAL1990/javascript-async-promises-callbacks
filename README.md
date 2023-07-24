# javascript-async-promises-callbacks

Creating an 'ice cream stall' to understand async/await, promises and callbacks
Using setTimeout, arrow functions, objects to better understand the relationship between each method/function
There'll be around 6-7 steps to reach final product, each using a setTimeout method within each subsequent setTimeout method, eventually creating a bloat in the function, and resulting in what is deemed as 'callback hell'
To address this bloat, promises will be introduced to better organize the code
Remove/commment your bloated 'callback hell' of order and production
Create an is_shop_open variable and set it to true
Create an order arrow function, passing in time and work as arguments
Inside that arrow function, add a return statement of a new instance of Promise call, passing in resolve and reject arguments(a Promise call will consist of pending, resolve, and reject stage --> pending is inbuilt i assume)
Inside the Promise call, if is_shop_open is true, call resolve, passing in work call
Else, call reject, and pass a console log text that shop is closed
Add a setTimeout method before the resolve call, and in place of the hardcoded time in milliseconds you have written before, write the time reference instead
For the code inside the arrow function, cut and paste the resolve call
After this order arrow function, call order and pass in a value(remember it's in milliseconds) for time reference, and for work reference, use the arrow function and console log a flavor array item of your choice from menu object(author used stocks i use menu)
You should get a logged message on console for your chosen flavor, which will appear according to the value you inputted for your time reference
\*\* The purpose of the above is to show you the relationship between the time and work references(work will represent all the steps you will do to reach final product)
For all the steps till your final product, instead of the multitude of callbacks you did in your removed/commented code, we will now employ the use of .then(promises chaining)
To do this, you will use call then on your order call for each step you need to reach final product
Inside each subsequent then call, you will use an arrow function and return the order call for the next step you have determined when you did the callback version
Check out the full scope of the code for your callback version and the promise chaining version, one should be more readable then the other(albeit longer)
\*\* Personally, the advantage i can see for promise chaining is that you are less likely to make mistakes while writing compared to callback chaining(and later Async/await will be introduced to showcase why it is better presumably)
At the end of the .then chains you can place a .catch call which will 'catch' errors in the function(For example, if is_shop_open is false, catch will run whatever code is inside it)
Lastly, there is a .finally call at the end of the code chain which will run regardless if the final .then runs, or catch runs, signifying the end of the code chain
Remove/comment the promise chain as we head into async/await
Inside an async function, you will have .try, .catch, and .finally calls
await in an async function will not allow the rest of the code inside the function to run till it is completed(The code outside the function will still run first while the await function 'waits')
After understanding the above, keeping the menu/stocks object and is_shop_open variable, we will now write a process in which the ice cream store will operate
We will have time function, passing in milliseconds, returning an instance of Promise with resolve and reject
Inside that Promise, if is_shop_open is true, we will setTimeout, passing in resolve and milliseconds reference
Else, we will reject with a shop is closed message
Then, we will have a kitchen async function with try, catch(error), finally
For catch, write a customer left console log
For finally, write a day ended, shop is closed console log
Remember that list of steps you curated? We will now apply them in the try method
Each step inside the try method will have a timer which you have established in the time function where it will resolve whenever you have milliseconds inputted
For your first step, console log the desired message and write await time(), passing in the set amount of time you want the first step to be completed
Call kitchen to run the function
Test it in your console and you should see the message in the console and the message in your finally method appear at the end
Once the above works, write the rest of your steps using await and console logs
Set is_shop_open to false to test catch(error)
All of the above should bring your async, await, and promises understanding to a much higher level(callbacks maybe not)
