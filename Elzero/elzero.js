let lastLink = document.querySelector("li.menu");

let megaMenu = document.querySelector("header .container .links")

lastLink.onclick = function() {
    megaMenu.style.transform = "translatey(0)";
    megaMenu.style.opacity = "1";
    megaMenu.style.zIndex = "1";
}
document.onkeyup = function(e) {
    console.log(e)
    if (e.key == "Escape"){
        megaMenu.style.transform = "translatey(2%)";
        megaMenu.style.opacity = "0";
        megaMenu.style.zIndex = "-1";
    }
}