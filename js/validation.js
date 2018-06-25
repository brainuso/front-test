/***Validation Plugin***/
/*This plugin will work for text as well, the only change is message text */
/*Capture submit button id*/
let button = document.getElementById('submit');

/*Validation function parsing element ID and regular expression for 
validation*/
validateInput = (ObjId, regEx) =>{
   var element = document.getElementById(ObjId);
   /*key up event listener for HTML element*/
   element.addEventListener("keyup", function (){
   	/*assign ID to <span> parent node for element*/
   element.parentNode.id = "parent-tip";
   var parentTip = document.getElementById("parent-tip");

   /*create <span> element and assign ID*/
        var childTip = document.createElement("span");
     	childTip.id = "child-tip";

        /*add classes tooltip and tooltip-text to parentTip and childTip
     	respectively*/
     	parentTip.classList.add("tooltip");
     	childTip.classList.add("tooltip-text");	
         
        /*get limit value from custom data*- attribute*/
      	limit = element.getAttribute("data-validate-limit");
     		var val = element.value;

           /*create disabled function for validation styling and message*/
           disabled = () =>{
	        /*append childTip to  parentTip */
	        parentTip.appendChild(childTip);
            /*disable and add disabled class to submit button,
    	        add warning class to childTip*/
		        button.disabled = true;
          		button.classList.add("disabled");
          		childTip.classList.add("warning");
          		childTip.innerHTML = message;
            }
            /*check if value is empty*/
            if(val ===""){
            	 message = "Value is required";
            	 disabled();
            }
     		/*check if input value matches regex*/
     		else if(!val.match(regEx)){
                message = "Invalid input: No alphabet or spaces allowed";
    	       disabled();
		    }
			/*check if input length exceeds limit*/
		    else if (val.length > limit) {
			message = `Only ${limit} digits are allowed.`;
            disabled();
		    }
		   	/*remove validation styling*/
		    else{
		   	button.disabled = false; 
	     	button.classList.remove("disabled");
	     	/*remove child-tip child elements*/
	     	 while(true){
              parentTip.removeChild(document.getElementById("child-tip"));
	     	 }
		    }
	    })
   	
   }

