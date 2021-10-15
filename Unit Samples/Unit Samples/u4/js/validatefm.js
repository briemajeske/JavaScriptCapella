//Form validation to check that all required fields are fill-out
window.onload = init;
 function checkall() {
        var checkev = 0;
        var ftname = document.vaform.fname.value;
        var ltname = document.vaform.lname.value;
        var eltml = document.vaform.emid.value;
        var atrate = eltml.indexOf("@");
        var dot = eltml.lastIndexOf(".");
        var topics = document.getElementById('topics').value;
        var issue = document.vaform.issue.value;
  
  
        if (ftname == "") {
          document.getElementById('fname').innerHTML = "Your first name is required.";
          checkev = 0;
        } else {
          document.getElementById('fname').innerHTML = "";
          checkev++;
        }
  
        if (ltname == "") {
          document.getElementById('lname').innerHTML = "Your last name is required.";
          checkev = 0;
        } else {
          document.getElementById('lname').innerHTML = "";
          checkev++;
        }
  
        if (eltml == "") {
          document.getElementById('emid').innerHTML = "Your email address is required.";
          checkev = 0;
        } else if (atrate < 1 || dot < atrate + 2 || dot + 2 >= eltml.length)
          document.getElementById('emid').innerHTML = "Your email input is not valid.";
        else {
          document.getElementById('emid').innerHTML = "";
          checkev++;
        }
  
        if (topics == '') {
          document.getElementById('ytopics').innerHTML = "Choose a topic please.";
          checkev = 0;
        } else {
          document.getElementById('ytopics').innerHTML = "";
          checkev++;
        }
  
        if (issue == '') {
          document.getElementById('fissue').innerHTML = "Please tell us about the issue."
          checkev = 0;
        } else {
          document.getElementById('fissue').innerHTML = "";
          checkev++;
        }
  
        if (checkev == 5) {
         //Check all before opening confirmation page.
            window.location.href = "confirm.html";
        }
      }