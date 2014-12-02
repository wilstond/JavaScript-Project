window.onload = pageLoad;

function pageLoad(){

var formSub = document.forms[0]; 
	formSub.onsubmit = processForm; 

	function processForm(){
		var name = document.forms[0].name.value;
		var email = document.forms[0].email.value; 
		var feedback = document.forms[0].feedbackarea.value; 
		var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


		if(name === ""){
			var nameMsg = document.getElementById("name");
			nameMsg.focus();  
			document.getElementById("nameR").innerHTML = "*Required";
			return false;
		}

		if (email === "" || !emailRegex.test(email)){
			var emailMsg = document.getElementById("email");
			emailMsg.focus();
			document.getElementById("emailR").innerHTML = "*Invalid email";
			return false; 
		}

		if (feedback === ""){
			var fbmsg = document.getElementById("feedbackarea");
			fbmsg.focus();
			document.getElementById("feedbackR").innerHTML = "*Required";
			return false; 
		}

	}

}

