var width = window.screen.width;
var height = window.screen.height;

document.getElementById("welcome").style.width = width;
document.getElementById("welcome").style.height = height;

document.getElementsByClassName("link")[1].addEventListener("click", function(e) {
	location.href = location.href - "#videos"
})