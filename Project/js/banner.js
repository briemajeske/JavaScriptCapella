// declare variables
// array of urls for images to preload
var imagesArray = [];
var imgUrls = ["images/firefighter.jpg","images/silhouette.jpg","images/work.jpg"];
var index = 0; // index 
// on window load loop over the imageUrls array and preload image then push 
// each element into imagesArray
window.onload = () => {
    imgUrls.forEach(x => {
    imagesArray.push(preloadImage(x));
    });

    animateBanner();
};

// animate banner function
function animateBanner() {
    // increment the index variable
    index++;
    // check if the index is within range of the array
    // if index is equal to the length of the array
    // index is set back to zero, to start banner at first image
    if(index == imagesArray.length) {
        index = 0;
    }
    document.getElementById("bannerImage").src = imagesArray[index].src;

    setTimeout(animateBanner, 3 * 1000);
}

// preload image function
function preloadImage(url) {
    var img = new Image();
    img.src = url;
    return img;
}