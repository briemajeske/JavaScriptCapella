//The JavaScript onload event handler 
window.onload = rotate;

//declare  variable 
var theExchange = 0;
var exImages = new Array("images/art1.jpg", "images/art2.jpg", "images/art3.jpg");

//The function to rotate the images.
function rotate() {
    
//Hello - What do you think happened here?
    theExchange++;
    if (theExchange == exImages.length) {
        theExchange = 0;
    }
    document.getElementById("exArt").src = exImages[theExchange];

    setTimeout(rotate, 3 * 1000);
}
