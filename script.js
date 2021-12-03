var overlay = document.querySelector(".overlay");
var menu = document.querySelector(".menu");
var isMouseDown = false;
var x = 0;
var translateX = 0;
var translateSpeed = 2;
var menuWidth = 300;
var opacity = 0;

overlay.addEventListener("mousedown", function (e) {
	isMouseDown = true;
	x = e.offsetX;
});

overlay.addEventListener("mousemove", function (e) {
	translateDelta = translateSpeed * (e.offsetX - x);

	if (isMouseDown) {
		translateX = translateX + translateDelta;
		if (translateX > menuWidth) {
			translateX = menuWidth;
		}
		if (translateX < 0) {
			translateX = 0;
		}
		menu.style.transform = "translateX(" + translateX + "px)";
	}

	x = e.offsetX;
});

overlay.addEventListener("mouseup", function () {
	// menu.style.transition = "0s linear";
	if (translateX >= 150) {
		menu.style.transform = "translateX(" + menuWidth + "px)";
	}
	if (translateX < 150) {
		menu.style.transform = "translateX(0px)";
	}
	isMouseDown = false;
});
