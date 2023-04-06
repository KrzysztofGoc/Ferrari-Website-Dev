const burgerButtons = document.getElementsByClassName("nav-burger-wrapper");
const sideNavigation = document.getElementsByClassName("side-navigation");
const burgerCloseButtons = document.getElementsByClassName("side-navigation-close");

// adjust for full screen side navigation
for(var i = 0; i < burgerButtons.length; i++){
    burgerButtons[i].addEventListener("click", function() {
        sideNavigation[0].style.left = "0px";
    })
};

burgerCloseButtons[0].addEventListener("click", function(){
    sideNavigation[0].style.left = "-400px";
});