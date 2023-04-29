const burgerButtons = document.getElementsByClassName("nav-burger-wrapper");
const burgerCloseButtons = document.getElementsByClassName("side-navigation-close");

const sideNavigation = document.getElementsByClassName("side-navigation");
const sideNavigationContent = document.getElementsByClassName("side-navigation-content");

const sideNavigationButtons = document.getElementsByClassName("side-navigation-button");

// adjust for full screen side navigation
for(var i = 0; i < sideNavigationButtons.length; i++){
    sideNavigationButtons[i].addEventListener("click", function() {
        sideNavigation[0].style.transition = "2.5s";
        sideNavigationContent[0].style.transition = "1.5s"

        sideNavigationContent[0].style.left = "-400px";
        sideNavigation[0].style.left = "-110%";
    })
};


for(var i = 0; i < burgerButtons.length; i++){
    burgerButtons[i].addEventListener("click", function() {
        sideNavigation[0].style.transition = "1s";
        sideNavigationContent[0].style.transition = "1.5s"

        sideNavigation[0].style.left = "0px";
        sideNavigationContent[0].style.left = "0px";
    })
};

burgerCloseButtons[0].addEventListener("click", function(){
    // reverse transition time of side navigation and side navigation content in order for side navigation content to hide first
    sideNavigation[0].style.transition = "2.5s";
    sideNavigationContent[0].style.transition = "1.5s"

    sideNavigationContent[0].style.left = "-400px";
    sideNavigation[0].style.left = "-120%";
});

window.addEventListener("resize", function() {
    if (this.window.innerWidth > 1280){
        sideNavigation[0].style.transition = "0s";
        sideNavigationContent[0].style.transition = "0s"

        sideNavigationContent[0].style.left = "-400px";
        sideNavigation[0].style.left = "-120%";
    }
});