var navigation = document.getElementById('nav-toggle');
navigation.addEventListener("click", function() {
    var siteNav = document.getElementById('site-nav-menu');
    siteNav.classList.add("active");
});

var langToggle = document.getElementById('lang-toggle');
langToggle.addEventListener("click", function() {
    var siteNav = document.getElementById('lang-menu');
    siteNav.classList.add("active");
});

var shareToggle = document.getElementById('share-toggle');
shareToggle.addEventListener("click", function() {
    var shareNav = document.getElementById('share-menu');
    shareNav.classList.add("active");
});

var wrapper = document.getElementById('wrapper');
wrapper.addEventListener("click", function() {
    var siteNav = document.getElementById('site-nav-menu');
    siteNav.classList.remove("active");
    var langNav = document.getElementById('lang-menu');
    langNav.classList.remove("active");
    var shareNav = document.getElementById('share-menu');
    shareNav.classList.remove("active");
});