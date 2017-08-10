$(document).ready(function() {

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 9500,
        autoplayDisableOnInteraction: false
    });

    function changeStyle() {
    var x = document.getElementById("selectStyle").value;
    document.getElementById("container").className = "" + x;
}




});