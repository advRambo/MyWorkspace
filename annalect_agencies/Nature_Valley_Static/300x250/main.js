var tl = new TimelineMax({ onComplete: endFrame, repeat: 1, repeatDelay: 2 });
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
    .set("#banner,#logo_img,#stripes_img,#bottomRip_img,#ctaBox,#BAR2,#BAR3,#BAR4,#pkg,#text1,#text2", { opacity: 0, force3D: true })


  //---------- Frame 1 ------------
  tl.addLabel("frame1", "0.1")
    .to("#banner,#logo_img,#bottomRip_img,#stripes_img,#ctaBox",0.1, { opacity: 1 },"frame1")
  //---------- Frame 2 ------------
  tl.addLabel("frame2", "1")
    .to("#BAR1", 0, { opacity: 0 }, "frame2+=1.01")
    .to("#BAR2", 0, { opacity: 1 },"frame2+=1")
  //---------- Frame 3 ------------
  tl.addLabel("frame3", "2.5")
    .to("#BAR2", 0, { opacity: 0 }, "frame3+=0")
    .to("#BAR3", 0, { opacity: 1 }, "frame3")

  //---------- Frame 4 ------------
  tl.addLabel("frame4", "3")
    .to("#BAR3", 0, { opacity: 0 }, "frame4+=0")
    .to("#BAR4", 0, { opacity: 1 }, "frame4")

  //---------- Frame 5 ------------
  tl.addLabel("frame5", "3.5")
    .to("#BAR4", 0, { opacity: 0 }, "frame5+=0")


  //---------- Frame 6 ------------
  tl.addLabel("frame6", "4")
    .to("#bottomRip_img,#ctaBox", 0, { opacity: 0 }, "frame6+=0")
    .to("#bottomRip_img", 0, { opacity: 1, y: -27 }, "frame6+=0")
    .to("#ctaBox", 0, { opacity: 1, x: 63, y: -28, width: 130 }, "frame6+=0")
    .to("#cta1", 0, { opacity: 1, x: -3, y: 0 }, "frame6+=0")
    .to("#pkg,#text1,#text2,#text1_T,#text2_T", 0, { opacity: 1 }, "frame6+=0")

}
