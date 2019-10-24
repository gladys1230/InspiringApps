# InspiringApps
JavaScript challenge for InspiringApps logo

The purpose of the challenge is to get the color dots to be at the right position to the InspiringApp's logo.
First, I created the simple html page with bootstrap element 
Second, I started working on the index.js tried to get the logo, color dot images to be showing at logo and dots
The object boxes is to position the color dots with x and y coordinators.
When the page initiated the first time, the logo and dots to be loading on the left hand side of the screen.
Remember, there are two black dots so, the ia-logo-dot-black.png got to call twice.
Then, I had to think about dragging the color dots, the dragDot and dragDotOver functions is written with the dropEffect = move.
When the user drop the color dot at the box, we have to see if the id is matching with the box id, if not, reject, if the second block dot trying to be dropped at the same box, send message tells the user it's occupied. Otherwise, any color dots goes to the wrong box, message shows wrong color dot for this box, reject!
There is the CORRECTS counter to counting down from 5, when it hits 0, shows the Winner Message.

The R.H.S. of the screen are the Reset button, that puts all the color dots to the original place and restart the game.
The messageBox is to show the logs to the user, the scroll bar shows when the messagelog is getting too long.

Overall, this is a very challenging assignment. But, I like it very much.
I had done the similar taskes in the past when I was working in the past functions were written in C.
I had to think about this in JavaScript this time.
There were errors and functions not working and such. But, the google chrome debugger shows the error messages and I tried to fixed it, sometimes, it was just a typo.

This is a simple working version, with slightly styling but over all working with rooms to improve.
