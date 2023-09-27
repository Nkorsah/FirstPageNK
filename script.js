var video = document.getElementById("videoElement");

// Function to resize the video
function resizeVideo() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Set the video's width and height based on the window size
    if (windowWidth / windowHeight > video.videoWidth / video.videoHeight) {
        video.style.width = windowWidth + "px";
        video.style.height = "auto";
    } else {
        video.style.width = "auto";
        video.style.height = windowHeight + "px";
    }
}

// Resize the video when the page loads and when the window is resized
window.addEventListener("load", resizeVideo);
window.addEventListener("resize", resizeVideo);