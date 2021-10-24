//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var myHostName;
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	myHostName = document.getElementById("hostNameInput").value;

	//Logging out to the console to look at the variables
	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('Variable myHostName: ' + myHostName);


	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	// Added myHostName
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	document.getElementById("hostNamePlaceholder").innerHTML = myHostName;


} 

