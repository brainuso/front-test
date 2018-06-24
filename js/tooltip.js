/*Tooltip plugin*/

 /*Tooltip function defintion*/
tooltip =(objId, label) =>{
	var element = document.getElementById(objId);
	
	//create tool tip span with class
	var tip = document.createElement("span");
	tip.classList.add("tooltip-text");
    tip.innerHTML = label;

	/*get data attributes for event listeners*/
	var start = element.getAttribute("data-tip-start");
	var end = element.getAttribute("data-tip-end");

	/*event listener to display tooltip and add tooltip class on start event */
	element.addEventListener(start, view => {
		   element.classList.add("tooltip");
            //append tip element to parent element
           element.appendChild(tip);
	});
	
	/*event listener to hide tooltip and remove tooltip class on the
	end event*/
        element.addEventListener(end, hide => {
		element.classList.remove("tooltip");
		element.removeChild(tip);
    });

}

