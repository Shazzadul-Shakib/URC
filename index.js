let menu = document.getElementsByClassName('fa-bars')[0];
let navitems = document.getElementsByClassName('nav-items')[0];
let uparrow = document.getElementsByClassName('fa-angle-up')[0];

menu.addEventListener("click", function(){
    navitems.style.display = "block";
    menu.style.display = "none";

})
uparrow.addEventListener("click", function(){
    navitems.style.display = "none";
    menu.style.display = "block";

})
