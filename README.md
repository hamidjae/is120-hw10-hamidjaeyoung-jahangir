# JavaScript Randomized Weather Forecast

(Live Link)[https://hamidjae.github.io/is120-hw10-hamidjaeyoung-jahangir/]

## What specific loops did you use in this assignment and why?
There were two For loops used in this assignments. One For loop was used in the generateRandomTemperatures function, taking days as a parameter and pushing temperatures onto the randomTemps array. The second For loop was used for the displayForecasts function, running the loop through the entire array in order to push the temperatures into the DOM. In both cases, I used the For loop as I knew how long the size of the array would be. Using a While loop would be unnecessary as it would add complexity where it shouldn't be. A For loop lets me control how long the loop runs, and since I know how long the loop should be, it was perfect for this assignment. I did not use any other loops in this assignment.

## Why do you think it's important that your cards are generated dynamically based on the array length instead of hardcoded in HTML? How would you add a 6th or 7th day to your forecast?

Hardcoding my cards would mean that if I wanted to make a change across one card, I would have had to likely go to every single card and change their behavior as well. Alongside that, allowing the program to be flexible is simply better programming practice in the long run. It is also the case that dynamically generating the cards means there is less HTML to write overall, and saves up time that would have been spent unnecessarily on this assignment (or any future assignments for that matter). Since cards are dynamically generated, adding a 6th or 7th day to my forecast would mean I simply add another card in the HTML, and update script.js to include one more instance of the loop for both displaying the cards and generating random values to be added onto the cards.

## What was the most difficult problem of this assignment and how did you work through it?

The most difficult part of this assignment was figuring out how to make each card, with its own unique temperatures and temperature classification, generate a card that matches those requirements. Using conditionals, I split up cards into "Cold", "Mild", or "Hot" with their own specific breakpoints. I also was not familiar with the Fahrenheit scale since I am not American, so I asked AI to generate breakpoints it believes would classify itself into those categories. Afterwards, I made a weather function that returned the appropriate category, using toLocaleDateString to transform a date into a readable string based on the location's format. I used en-us for this purpose, so it prints the date out in the order weekday, month, date. After that, I used the result generated and attached them to the cards so that CSS can work on it and accordingly change the color. Splitting these hurdles up into specific functions made the building blocks much easier to use.

