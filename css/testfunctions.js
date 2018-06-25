
     numValidate =(ObjId) =>{
     	var element = document.getElementById(ObjId);
     	var parentTip = element.parentNode;
     	
     	var childTip = document.createElement("span");
     	parentTip.classList.add("tooltip");
     	childTip.classList.add("tooltip-text");	
      parentTip.appendChild(childTip); 
	
     	 let regNum = /^\d+$/;
     	// alert(element.value)
     		limit = element.getAttribute("data-validate-limit");
     		var num = element.value;
	/*checks string against numeric regexpression*/
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
// parentTip.removeChild(childTip);
    }	

(function(){
'use-strict';

var button = document.getElementsByTagName('button')[0];
var myHandler = function() {
    var click = 0;
    return function() {
        if(click === 0) {
            alert('single click');
        }
        click++;
    }
}();


button.addEventListener('click', myHandler, false);
})();
https://stackoverflow.com/questions/31702173/execute-clickfunction-only-first-click


CSS focus tooltip 
https://codepen.io/vpegado/pen/daugx
https://codepen.io/gabrieleromanato/pen/jAGkLR

@import "compass/css3";

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

@keyframes fold {
    0% {
        margin-bottom: -8px;
        visibility: visible;
        line-height: 0;
        transform-origin: 0, 0, 0;
        transform: rotate3d(1, 0, 0, -90deg);
    }
    33.333% {
        margin-bottom: 4px;
        line-height: 16px;
        @include transform(rotate3d(1, 0, 0, 0deg));
    }
    66.667% {
        margin-bottom: 2px;
        @include transform(rotate3d(1, 0, 0, 25deg));
    }
    100% {
        margin-bottom: 0;
        visibility: visible;
        height: auto;
        transform-origin: 0, 0, 0;
        transform: rotate3d(1, 0, 0, 0deg);
    }
}

::placeholder {
  font-style: italic;
  color: #AAA;
}

body {
  background: #eee;
  perspective: 400;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

.container {
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 32px auto;
}
.info {
  color: #666;
  h1 {
    margin: 8px 0;
    font-weight: 300;
  }
  p {
    margin: 8px 0;
    font-weight: 300;
    font-size: 14px;
    & > a,
    & > a:visited {
      color: #666;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.form-input {
  appearance: none;
  border-radius: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: 'Open Sans', sans-serif;
  outline: none;
  border: none;
  line-height: 1;
  width: 100%;
  height: 32px;
  padding: 0 16px;
  font-size: 14px;
  margin-top: 2px;
  color: #666;
}
.form-tooltip {
  display: block;
  visibility: hidden;
  overflow: hidden;
  box-sizing: border-box;
  height: 0;
  margin-bottom: -8px;
  cursor: help;
  animation-name: fold;
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-direction: reverse;
  :focus + & {
    margin-bottom: 0;
    height: auto;
    visibility: visible;
    animation: fold ease-in 500ms;
    animation-direction: normal;
  }
  padding: 4px 16px;
  background: #bbb;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
}

.container
  .info
    %h1 :focus tooltip
  .form
    %input.form-input{:type => "text", :placeholder => "Select this to fold tooltip"}
    .form-tooltip Information only visible on :focus
    %input.form-input{:type => "text", :placeholder => "Or this to fold another"}
    .form-tooltip Another tooltip with.<br> Only this with some more content.
  .info
    %p
      Written by
      %a{:href => "https://twitter.com/vpegado", :target => "_blank"} Victor Pegado