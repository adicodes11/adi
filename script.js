    document.addEventListener('DOMContentLoaded', function () {
        const video = document.getElementById('fullscreen-video');
        video.addEventListener('loadedmetadata', function () {
            video.disablePictureInPicture = true;
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const sliderBtn = document.getElementById("slider-btn");
        const sliderOptions = document.getElementById("slider-options");
    
        sliderBtn.addEventListener("click", function () {
            if (sliderOptions.style.display === "block" || sliderOptions.style.display === "") {
                sliderOptions.style.display = "none";
            } else {
                sliderOptions.style.display = "block";
            }
        });
    });
    