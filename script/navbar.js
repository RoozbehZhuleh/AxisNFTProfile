const explore = document.querySelector(".navbar--explore");
const exploreDropDownList = document.querySelector(".dropdown-menu__list");
const exploreDropDownItem = document.querySelector(".explore__item");
const exploreDropDownWrapper = document.querySelector(".dropdown-menu--explore");
const navbarMenuItem = document.querySelector(".navbar__menu__item");



function toggleExplore(){

    if (exploreDropDownWrapper.style.display == "none"){
        exploreDropDownWrapper.style.display = "flex";
        document.querySelector(".explore-fa").style.transform = "rotate(180deg)";
    }

    else {
        exploreDropDownWrapper.style.display = "none";
        document.querySelector(".explore-fa").style.transform = "rotate(0)";
    }
}

explore.addEventListener("click", toggleExplore);




const pages = document.querySelector(".navbar--pages");
const pagesDropDownList = document.querySelector(".dropdown-menu__list--pages");
const pagesDropDownItem = document.querySelector(".dropdown-menu__item");
const pagesDropDownWrapper = document.querySelector(".dropdown-menu__wrapper--pages");
// const navbarMenuItem = document.querySelector(".navbar__menu__item");


function togglepages(){

    if (pagesDropDownWrapper.style.display == "none"){
        pagesDropDownWrapper.style.display = "flex";
        document.querySelector(".pages-fa").style.transform = "rotate(180deg)";
    }

    else {
        pagesDropDownWrapper.style.display = "none";
        document.querySelector(".pages-fa").style.transform = "rotate(0)";
    }
};

pages.addEventListener("click", togglepages);

