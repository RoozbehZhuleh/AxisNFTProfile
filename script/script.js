const darkBtn = document.querySelector("#theme__btn");
const banner = document.querySelector(".banner");
const firstBannerBox = document.querySelector(".first-img");
const secondBannerBox = document.querySelector(".second-img");
const thirdBannerBox = document.querySelector(".third-img");
const fourthBannerBox = document.querySelector(".fourth-img");
const header = document.querySelector("header");


darkBtn.addEventListener("click", function() {


    darkBtn.style.transition = "all 300ms linear";
    if (localStorage.getItem('theme') === 'dark-mode'){
        darkBtn.src = "./assets/axies-images/01_header/moon-2.png";
    }

    else if(localStorage.getItem('theme') === 'light-mode'){
        darkBtn.src = "./assets/axies-images/01_header/sun.png";
        darkBtn.style.transition = "all 300ms linear";
    }
    
    
});


// hovering effect on banners


firstBannerBox.addEventListener("mouseenter", function() {
    firstBannerBox.style.cursor = "pointer";
    firstBannerBox.style.border = "2px solid var(--accent-color)";
    secondBannerBox.style.width = "35rem";
    thirdBannerBox.style.width = "35rem";
    fourthBannerBox.style.width = "35rem";
});

firstBannerBox.addEventListener("mouseleave", function() {
    firstBannerBox.style.width= "100%";
    firstBannerBox.style.border = "none";
    secondBannerBox.style.width = "100%";
    thirdBannerBox.style.width = "100%";
    fourthBannerBox.style.width = "100%";
})

secondBannerBox.addEventListener("mouseenter", function() {
    secondBannerBox.style.cursor = "pointer";
    secondBannerBox.style.border = "2px solid var(--accent-color)";
    firstBannerBox.style.width = "35rem";
    thirdBannerBox.style.width = "35rem";;
    fourthBannerBox.style.width = "35rem";
});

secondBannerBox.addEventListener("mouseleave", function() {
    firstBannerBox.style.width= "100%";
    secondBannerBox.style.border = "none";
    secondBannerBox.style.width = "100%";
    thirdBannerBox.style.width = "100%";
    fourthBannerBox.style.width = "100%";
})

thirdBannerBox.addEventListener("mouseenter", function() {
    thirdBannerBox.style.cursor = "pointer";
    thirdBannerBox.style.border = "2px solid var(--accent-color)";
    firstBannerBox.style.width = "35rem";
    secondBannerBox.style.width = "35rem";
    fourthBannerBox.style.width = "35rem";
});

thirdBannerBox.addEventListener("mouseleave", function() {
    firstBannerBox.style.width= "100%";
    thirdBannerBox.style.border = "none";
    secondBannerBox.style.width = "100%";
    thirdBannerBox.style.width = "100%";
    fourthBannerBox.style.width = "100%";
})


fourthBannerBox.addEventListener("mouseenter", function() {
    fourthBannerBox.style.cursor = "pointer";
    fourthBannerBox.style.border = "2px solid var(--accent-color)";
    firstBannerBox.style.width = "35rem";
    thirdBannerBox.style.width = "35rem";
    secondBannerBox.style.width = "35rem";
});

fourthBannerBox.addEventListener("mouseleave", function() {
    firstBannerBox.style.width= "100%";
    fourthBannerBox.style.border = "none";
    secondBannerBox.style.width = "100%";
    thirdBannerBox.style.width = "100%";
    fourthBannerBox.style.width = "100%";
})


// choosing a new banner
firstBannerBox.addEventListener("click", function() {
    header.style.backgroundImage = "url(../assets/banners/banner1.jpg)";
    header.style.backgroundPosition = "center";
})

secondBannerBox.addEventListener("click", function() {
    header.style.backgroundImage = "url(../assets/banners/banner2.jpg)";
    header.style.backgroundPosition = "center";
})

thirdBannerBox.addEventListener("click", function() {
    header.style.backgroundImage = "url(../assets/banners/banner3.jpg)";
    header.style.backgroundPosition = "center";
})

fourthBannerBox.addEventListener("click", function() {
    header.style.backgroundImage = "url(../assets/banners/banner4.jpg)";
    header.style.backgroundPosition = "center";
})
