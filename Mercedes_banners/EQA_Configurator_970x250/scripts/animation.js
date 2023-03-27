var banner = {};
var tl;
var loop = 0;
var loopMax = 2;
var tm;

function listen(evnt, elem, func) {
	if (elem.addEventListener)  // W3C DOM
		elem.addEventListener(evnt, func, false);
	else if (elem.attachEvent) { // IE DOM
		return elem.attachEvent("on" + evnt, func);
	}
}

listen("load", window, initAd);

function initAd() {
	var learnmore = document.getElementById("banner");
	learnmore.addEventListener("mouseenter", onHoverOver);
	learnmore.addEventListener("mouseleave", onHoverOut);
	var disclaimer_hover = document.getElementById("hover_link");
	disclaimer_hover.addEventListener("mouseenter", onDisclaimerHover);
	disclaimer_hover.addEventListener("mouseleave", offDisclaimerHover);
	new TimelineMax().add(fadeIn_to(ad, 0.5));
	banner.start();
}

banner.start = function () {
	tl = new TimelineMax({ repeat: -1 })
	this.maintimeline();
}

/***************************/
/*** ANIMATION FUNCTIONS ***/
/***************************/

/*** GENERAL ***/

function fadeIn_to(a, dur) {
	return new TimelineMax()
		.to(a, dur, { autoAlpha: 1 });
}

function fadeIn(a, dur) {
	return new TimelineMax()
		.from(a, dur, { autoAlpha: 0 });
}

function fadeIn_up(a) {
	return new TimelineMax()
		.from(a, 0.5, { autoAlpha: 0, y: '+=15px', force3D: true });
}

function fadeOut(a, dur) {
	return new TimelineMax()
		.to(a, dur, { autoAlpha: 0 });
}

function zoom(a) {
	new TimelineMax()
		.from(a, 12, { scale: 1.1, transformOrigin: '50% 50%', rotation: 0.01, force3D: true });
}

function zoom_delay(a) {
	new TimelineMax()
		.from(a, 11, { delay: 1, scale: 1.2, transformOrigin: '50% 50%', rotation: 0.01, force3D: true });
}

function onrepeat() {
	if (loop < loopMax) {
		tl.play()
	} else {
		tl.pause()
	}
	loop++;
}

function onHoverOver(e) {
	TweenMax.to('#cta_container', 0.25, { scale: 1.1, rotation: 0.01, backgroundColor: 'transparent', force3D: true });
}

function onHoverOut(e) {
	TweenMax.to('#cta_container', 0.25, { scale: 1, rotation: -0.01, backgroundColor: 'transparent', force3D: true });
}

function onDisclaimerHover(e) {
	TweenMax.to('#disclaimer_container', 0.25, { autoAlpha: 1, force3D: true });
}

function offDisclaimerHover(e) {
	TweenMax.to('#disclaimer_container', 0.25, { autoAlpha: 0, force3D: true });
}

/*********************/
/*** MAIN TIMELINE ***/
/*********************/


banner.maintimeline = function () {

	tl
		.set([img_01, img_02], { scale: 1 })
		.call(zoom, [img_01])
		.add(fadeIn_to(frame1, 0.5))
		.add(fadeIn(img_01, 0.5), '-=0.5')

		.add(fadeIn_up(eq_logo))
		.add(fadeIn_up(copy_01), '+=0.5')
		.add(fadeIn([cta_container, hover_link], 0.5), '+=0.25')

		.add(fadeOut(copy_01, 0.5), '+=2.5')
		.add(fadeIn_up(copy_02))

		.call(zoom_delay, [img_02])
		.add(fadeOut(copy_02, 0.5), '+=3')
		.add(fadeIn(img_02, 0.5), '-=0.5')
		.add(fadeIn_up(copy_03))

		.call(onrepeat)

		.add(fadeOut(frame1, 0.5), '+=5')
		.set([img_01, img_02], { scale: 1 })
		;
}
