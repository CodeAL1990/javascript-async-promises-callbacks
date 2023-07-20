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
