

//let tooltipText = document.getElementById("tooltip-text");
let button = document.getElementById('submit');


tooltip = (ObjId, label) =>{
	ObjId.classList.add("tooltip");
	display = document.createElement("span");
		display.classList.add("tooltip-text");
		display.innerHTML = message;
        element.append(display);
     	};


/*parse id, limit, invalid message */

validate = (ObjId) =>{
	var element = document.getElementById(ObjId);
	element.addEventListener("keyup", function (){
		if(element.required == true){
			promptMessage = "Value is required";
		}

		//using typeof may negate an input if a user wants to store numbers as text
	switch(element.type){
		case "number":
		    regEx = /^\d+$/;
		    limit = element.getAttribute("data-validate-limit");
		     
		    invalidMessage = `Only ${limit} digits allowed`;
		    if(element.value ==""){
               // tooltipText.innerHTML = promptMessage;

		    }else{
		    if (element.value.length > limit) {
              button.disabled = true;
              button.classList.add("disabled");
              // tooltipText.classList.add("warning");
              // tooltipText.innerHTML = invalidMessage;
		    }
		    else{  
	     	  button.disabled = false; 
	     	  button.classList.remove("disabled");
	          // tooltipText.classList.remove("warning");
	          // tooltipText.innerHTML = "";
	        }
		    	
		    }
		break;
		case "text":
		    regEx = /^[A-za-z ]+$/ ;
		    invalidMessage = 'only alphanumric text';
		break;
		default:
		    invalidMessage = 'No value';
	} 
	

		if( promptMessage != ""){
			message = promptMessage;
		} else if(invalidMessage != ""){
			message = invalidMessage;
		}
		return message;
});
	tooltip(element, message);

}




/*/*Number validation function

 onkeyup="numValidate(this.value)"
     numValidate =(num) =>{

	/*checks string against numeric regexpression
	if(num.match(regNum)){
    	message = "number"
		if (num.length > maxLength) {
             message = "only 5 digits are allowed.";
           button.disabled = true;
           button.classList.add("disabled");
           tooltipText.classList.add("warning");
		}else
	     {  
	     	button.disabled = false; 
	     	button.classList.remove("disabled");
	       tooltipText.classList.remove("warning");
	     }
    } else{
		 message = "not number"
		button.disabled = true ;
		button.classList.add("disabled");
		tooltipText.classList.add("warning");
	}
     
     tooltipText.innerHTML = message;

	}
*/
