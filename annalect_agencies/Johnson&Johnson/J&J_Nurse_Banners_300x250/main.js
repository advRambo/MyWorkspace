var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}

function initAd() {
  var logoImg = document.getElementById("logo_img");

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#logo_cta, #copy1_a, #copy1_b, #copy2_a, #copy2_b, #copy2_c, #copy3_a, #copy3_b, #copy3_c,#copy3_d,#logo_top, #learnMore, #cta, #logo_img_last",{ opacity: 0, force3D: true })
    .set("#copy1_a, #copy1_b,#c2a_b,#c2b_a, #c2b_c, #c2c_a", {scale: 0.5,force3D: true,})
    .to("#logo_container", 0, { opacity: 1, force3D: true });

    //---------- Frame 1 ------------
  tl.addLabel("frame1", "")
    .fromTo(logoImg,1.7,{ scale: 1, x: 0, y: 0, ease: Linear.easeIn },{ scale: 4, ease: Power4.easeIn },"frame1")
    .to(logoImg,0.3,{ scale: 245, x: -550, y: -150, ease: Power4.easeInOut },"frame1+=1.7");

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "0")
    .fromTo("#copy1_a",0.5,{ scale: 0.5 },{ opacity: 1, scale: 1.14, ease: Power2.easeIn },"frame2+=2")
    .to("#copy1_a", 0.5, { scale: 1, ease: Power1.easeIn }, "frame2+=2.5")
    .to("#logo_top,#cta",0.7,{ opacity: 1, ease: Linear.easeInOut },"frame2+=2.3")
    .fromTo("#copy1_b",0.5,{ scale: 0.5 },{ opacity: 1, scale: 1.14, ease: Power4.easeIn },"frame2+=3.1")
    .to("#copy1_b", 0.3, { scale: 1, ease: Power3.easeInOut }, "frame2+=3.6");

    //---------- Frame 3 ------------
  tl.addLabel("frame3", "4.5")
    .to("#copy1Box", 0.3, { opacity: 0, ease: Power1.easeInOut }, "frame3+=0.4")
    .to("#copy1Box", 0.3, { x: 300, ease: Power1.easeInOut }, "frame3+=0.5")
    .to("#copy2_a,#c2a_a",0.5,{ opacity: 1, ease: Power1.easeIn },"frame3+=1")
    .fromTo("#c2a_b",0.5,{ scale: 0.5 },{ opacity: 1, scale: 1.1, ease: Power4.easeIn },"frame3+=1.5")
    .to("#c2a_b", 0.3, { scale: 1, ease: Power3.easeIn }, "frame3+=2")
    .to("#copy2_b", 0, { opacity: 1, ease: Power1.easeIn }, "frame3+=2.5")
    .fromTo("#c2b_a",0.5,{ scale: 0.5 },{ opacity: 1, scale: 1.14, ease: Power4.easeIn },"frame3+=2.6")
    .to("#c2b_a", 0.3, { scale: 1, ease: Power3.easeIn }, "frame3+=3.1")
    .to("#c2b_b", 0.2, { opacity: 1, ease: Power1.easeIn }, "frame3+=3.5")
    .to("#copy2_c", 0, { opacity: 1, ease: Power1.easeIn }, "frame3+=3.9")
    .fromTo("#c2b_c,#c2c_a",0.5,{ scale: 0.5 },{ opacity: 1, scale: 1.14, ease: Power4.easeIn },"frame3+=3.9")
    .to("#c2b_c,#c2c_a", 0.3, { scale: 1, ease: Power3.easeIn }, "frame3+=4.4");

      //---------- Frame 4 ------------
    tl.addLabel("frame4", "10.5")
      .to("#copy2Box", 0.5, { opacity: 0, ease: Power1.easeInOut }, "frame4+=0.5")
      .to("#copy2Box", 0.5, { x: 300, ease: Power1.easeInOut }, "frame4+=0.6")
      .to("#copy3_a, #copy3_c, #copy3_d",1,{ opacity: 1, scale: 1, ease: Linear.easeIn },"frame4+=1.5")
      .to("#copy3_b, #logo_img_last,#c3c_a",0.5,{ opacity: 1, ease: Linear.easeIn },"frame4+=1.5")
      .fromTo("#c3c_b",0.5,{ scale: 1 },{ scale: 1.1, ease: Power4.easeIn },"frame4+=2.2")
      .to("#c3c_b", 0.3, { scale: 1, ease: Power3.easeInOut }, "frame4+=2.8")
      .to("#learnMore", 0.6, { opacity: 1, ease: Power4.easeIn }, "frame4+=3.1")
      .fromTo("#learnMore",0.5,{ scale: 1 },{ scale: 1.09, ease: Power4.easeIn, force3D: true  },"frame4+=3.7")
      .to("#learnMore", 0.3, { scale: 1, ease: Power3.easeIn, force3D: true  }, "frame4+=4.2");


}
