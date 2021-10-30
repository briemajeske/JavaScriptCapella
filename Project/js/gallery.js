// declar variables
var imagesArray = [];
var index = 0; // index 
// array of urls for images to preload
var imgUrls = ["images/firefighter.jpg","images/silhouette.jpg","images/work.jpg"];
// on window load loop over the imageUrls array and preload image then push 
// each element into imagesArray
window.onload = () => {
    imgUrls.forEach(x => {
    imagesArray.push(preloadImage(x));
    });
};

// animate gallery function
function animateGallery() {
    // increment the index variable
    index++;
    // check if the index is within range of the array
    // if index is equal to the length of the array
    // index is set back to zero, to start gallery at first image
    if(index == imagesArray.length) {
        index = 0;
    }

    setTimeout(() => {
        document.getElementById("link").href = imagesArray[index].src;
        document.getElementById("image").src = imagesArray[index].src;
    }, 500);

    // setTimeout(animateGallery, 3 * 1000);
}

// source for this
// https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
function preloadImage(url) {
    var img = new Image();
    img.src = url;
    return img;
}
// this fails silently - bug?
// function preloadImages() {
//     var images = [];
//     for (var i = 0; i < arguments.length; i++) {
//         images[i] = preloadImage(arguments[i])
//     }
//     return images;
// }

