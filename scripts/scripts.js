var hamburgerBtn = document.getElementsByClassName("hamburger-btn")[0];
var nav = document.getElementsByClassName("nav")[0];
var navList = document.getElementsByClassName("nav-list")[0];
var navLinks = document.getElementsByClassName("nav-link");
var hamburgerIcon = document.getElementsByClassName("hamburger-icon")[0];

hamburgerIcon.addEventListener("click", function() {
	nav.classList.add("hamburger-nav-show", "navy");
	hamburgerIcon.classList.remove("show");
	hamburgerIcon.classList.add("hide");
	hamburgerBtn.classList.add("white-border");
	closeIcon.classList.remove("hide");
	closeIcon.classList.add("show");
	Array.prototype.forEach.call(navLinks, function(navLink) {
		navLink.classList.remove("dark-grey-text");
		navLink.classList.add("light-grey-text");
	});
});

var closeIcon = document.getElementsByClassName("close-icon")[0];
closeIcon.addEventListener("click", function() {
	nav.classList.remove("hamburger-nav-show", "navy", "light-grey-text");
	hamburgerIcon.classList.add("show");
	hamburgerIcon.classList.remove("hide");
	hamburgerBtn.classList.remove("white-border");
	closeIcon.classList.add("hide");
	closeIcon.classList.remove("show");
	[].forEach.call(navLinks, function(navLink) {
		navLink.classList.add("dark-grey-text");
		navLink.classList.remove("light-grey-text");
	});
});