const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');

});
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function() {
        popup.classList.toggle("show");
     }, 5900);
}