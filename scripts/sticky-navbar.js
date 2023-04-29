const navbar = document.getElementById("sticky-nav");
const navbarComputedStyle = window.getComputedStyle(navbar);

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScrollTop > 100) {
      if (currentScrollTop > lastScrollTop) {
         // downscroll
         navbar.style.top = "-" + navbarComputedStyle.height;
      } else if (currentScrollTop < lastScrollTop) {
       // upscroll
       navbar.style.top = "0px";
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
   }
   else {
      if(navbar.style.top === "0px"){
         navbar.style.top = "-" + navbarComputedStyle.height;
      }
   }

}, false);