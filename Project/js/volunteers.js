var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];
//var volunteerArray = ['John Smith', 'Jane Willow', 'Randy Jack', 'Jen Stevens'];


var displayVolunteers = function () {   
    // display the volunteers in the text area
    //$("volunteerList").value = volunteerArray.join("\n");

	// comment out the line above change this to a loop instead to loop through the array.  
   var volunteerListString = "";
   // loop over the array, if the volunteer string doesn't have the volunteer in it 
   // add the index+1, the volunteer name and a new line char at the end
   volunteerArray.forEach((v,i) => {
       if(volunteerListString.indexOf(v) == -1) {
           volunteerListString += i + 1 + " " + v + "\n";
       }
   });
   $("volunteerList").value = volunteerListString;
};

var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // get the data from the form (hint: use the same format as from the add).
    if(volunteerArray.length > 0) {
        var volunteerString = $("first_name").value + " " + $("last_name").value;
        
        volunteerArray.forEach((v,i) => {
            
           if(v.indexOf(volunteerString) > -1) {
               volunteerArray.splice(i, 1);
           }
        })

    }
    // remove the string from the array (hint, loop through the entire list, compare the string with the item in the array.
	
   
	 
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};