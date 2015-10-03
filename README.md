### Instuctions

Using JQuery - create a typing game.

#### Further Reading
[JQuery DOCs](https://jquery.com/)

#### Basic Req's:
* Create two keyboards (include space bar):
		* First keyboard, lowercase keys, numbers and special characters acessed without shift
		* Second, keys accessed while holding down the shift key
		* Exclude keys like tab, delete, shift, command, ctl, caps, option/alt & enter
* The first keyboard should be the only one displayed when the page loads.
* The second keyboard should toggle when the shift key is held down.
* When keys are pressed, they should be highlighted in the browser.
		*Hint: the letters should be matched with the corresponding ascii code.
* The provided array sentences should be displayed at the top of the page one sentence at a time. Once the sentence has been completed, the next in line should appear.
* Letters should be highlighted with animation as the correct keys are pressed:
		*If the correct letter is pressed, indicate below with a green check.
		*If not correct key pressed, indicate below with red X
* In the center, display the current letter to be typed.
* The users words per minute should be calculated and displayed on the screen when there are no more sentences left in the array.
		*Can be calculate by number of words typed divided by minutes minus 2 for every mistake.
* There should be a delay so the user can see the score, asked if they would like to play again.
		*If confirmed yes, resload the page.
		*If no, leave as is.
