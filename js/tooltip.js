/*Tooltip plugin*/
 /*Tooltip function defintion*/
tooltip =(objId, label) =>{
	var element = document.getElementById(objId);
	/*get data attributes for event listeners*/
	var start = element.getAttribute("data-tip-start");
	var end = element.getAttribute("data-tip-end");
	/*event listener to display tooltip and add tooltip class on start event */
	element.addEventListener(start, view => {
		   element.classList.add("tooltip");
           element.innerHTML = `<span class="tooltip-text">${label}</span>`;
           /* elChild = `<span class="tooltip-text">${label}</span>`;
           element.appendChild(elChild);*/
	});
	
	/*event listener to hide tooltip and remove "start" event listener this 
	pattern failed because it made the add eventlistener unsuable for other
	 bars*/
	/*element.removeEventListener(start, view());*/

	/*event listener to hide tooltip and remove tooltip class on the
	end event*/
        element.addEventListener(end, hide => {
		element.classList.remove("tooltip");
        element.innerHTML = "";
	});

}

