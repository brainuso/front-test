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

/*	/*Number validation function
let button = document.getElementById('submit');
let regNum = /^\d+$/;
 
     numValidate =(num) =>{
     	var element = document.getElementById('number');
     	
     	
     	if(childTip == null){
     		var parentTip = element.parentNode;
     	
     	var childTip = document.createElement("span");
     	parentTip.classList.add("tooltip");
     	childTip.classList.add("tooltip-text");	
     		parentTip.appendChild(childTip); 
     	}
     		limit = element.getAttribute("data-validate-limit");
	/*checks string against numeric regexpression
	if(num.match(regNum)){
    	message = "number";
		if (num.length > limit) {
             message = `only ${limit} digits are allowed.`;
           button.disabled = true;
           button.classList.add("disabled");
           childTip.classList.add("warning");
           childTip.innerHTML = message;
		}else
	     {  
	     	button.disabled = false; 
	     	button.classList.remove("disabled");
	       childTip.classList.remove("warning");
	     }
    } else{
		 message = "not number";
		button.disabled = true ;
		button.classList.add("disabled");
		childTip.classList.add("warning");
		childTip.innerHTML = message;
	}
     
     childTip.innerHTML = message;
//parentTip.removeChild(childTip);
     	

	}*/