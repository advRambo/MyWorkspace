var banner = {};
var tl;
var loop = 0;
var loopMax = 0;
var tm;
var tlend = false;

function listen(evnt, elem, func) {
	if (elem.addEventListener)  // W3C DOM
		elem.addEventListener(evnt,func,false);
	else if (elem.attachEvent) { // IE DOM
		return elem.attachEvent("on"+evnt, func);
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

banner.start = function(){
	tl = new TimelineMax({repeat:-1})
	this.maintimeline();
}

/***************************/
/*** ANIMATION FUNCTIONS ***/
/***************************/

/*** GENERAL ***/

function fadeIn_to(a, dur) {
	return new TimelineMax()
		.to(a, dur, {autoAlpha:1});
}

function fadeIn(a, dur) {
	return new TimelineMax()
		.from(a, dur, {autoAlpha:0});
}

function fadeIn_up(a) {
	return new TimelineMax()
		.from(a, 0.75, {autoAlpha:0, y:'+=15px', force3D: true});
}

function fadeOut(a, dur) {
	return new TimelineMax()
		.to(a, dur, {autoAlpha:0});
}

function slide_in(a, dur, dist) {
	return new TimelineMax()
		.from(a, dur, {x:'+='+dist, ease:Power1.easeInOut});
}

function zoom_in(a) {
	zoom_tl = new TimelineMax()
		.to(a, 15, {scale: 1.25, x:'-=0px', transformOrigin:'45% 65%', rotation: 0.01, ease:Sine.easeOut, force3D: false});
}


function onrepeat() {
	if(loop < loopMax) {
	    tl.play()
	} else {
	    tl.pause()
	}
	loop++;
	tlend = true;
}

function onHoverOver(e){
	TweenMax.to('#cta_container', 0.25, {scale:1.08, rotation: 0.01, force3D: false});
	tm = TweenMax.fromTo('#cta_arrow', 0.25, {x:0, ease:Power1.easeInOut},{x:3,repeat:-1, yoyo:true, ease:Power1.easeInOut, force3D: false});
}

function onHoverOut(e){
	TweenMax.to('#cta_container', 0.25, {scale:1, rotation: -0.01, force3D: false});
	tm.kill()
}

function onDisclaimerHover(e){
	TweenMax.to('#disclaimer_container', 0.25, {autoAlpha:1, force3D: true});
}

function offDisclaimerHover(e){
	TweenMax.to('#disclaimer_container', 0.25, {autoAlpha:0, force3D: true});
}

/*********************/
/*** MAIN TIMELINE ***/
/*********************/

banner.maintimeline = function(){
	
	tl	
		.call(zoom_in, [img_01])
		.add(fadeIn_to(frame1, 0.75))
		.add(fadeIn([cta_container,hover_link],0.75),'-=0.5')

		.add(fadeIn_up(copy_01),'-=0.75')
		
		.add(fadeOut(copy_01, 0.75),'+=2')

		.add(fadeIn_up(copy_02))
		.add(fadeOut(copy_02, 0.75),'+=2.5')
		
		.add(fadeIn_up(copy_03))

		.call(onrepeat)	

		.add(fadeOut([frame1,cta_container,logo], 0.75),'+=5')
		;
}
