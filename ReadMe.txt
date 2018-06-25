Test 1:
Files: 
-tooltips.html
-js/tooltip.js
-css/tooltip.css

The chart and tooltip was quite straight forward.

Functionality
/*Tooltip( Id, tooltip value) */
 tooltip("bar1", "value <strong>75<strong>");

Test 2: 
Files: 
-validation.html
-js/validation.js
-css/validation.css

The validation was successful I used a parent-child relationship for the input element. The challenge was in managing the tooltip after appending it to the parent element. The tooltip text block appended over each other they proved difficult to solve within the time frame. 

-Functionality
<span id="parent-tip">
<input ....>
<span id="child-tip">
</span>
</span>
The tooltip and validation are triggered onkeyup event and displays messages as the mouse hovers over the input field.

Test 3:
Files: 
-css_animation.html
-css/animation.css

This animations were pretty straightforward. The bounce was the major challenge as various actions were taking place. I was unable to make it rest at the bottom of the container at the 50% and 64% animations.
Another challenge was the click event. I tried using a checkbox hack to manage it but that proved difficult, so I resorted to the the :hover selector to catch the mouse hovering over the box and enable the animation. 

Functionality
<span class="box puff" id="puff" >puff</span> 
The hover event acts on the class unique element class "puff" and initates the animation