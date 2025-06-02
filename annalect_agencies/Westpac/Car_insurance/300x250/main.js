var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 0 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {


  document.getElementById("banner").addEventListener('mouseover', ctaOver, false);
  document.getElementById("banner").addEventListener('mouseout', ctaOut, false);

  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#line1,#line2,#line3,#line4,#line5,#logo1,#logo2,#legalCopy1,#frame2,#frame3,#frame4,#plus2,#equals,#ctaBox", { opacity: 0, force3D: true })
    .set("#line1,#line2,#line3", { x: 30 })
    .set("#bg", { scale: 1.2, rotationZ: 0.001 })
    .set("#frame2,#frame3,#frame4,#logo2,#ctaBox", { x: 300 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to("#bg", 3.6, { scale: 1, rotationZ: 0.001, opacity: 1, ease: Linear.easeOut }, "frame1+=0.5")
    .to("#logo1", 0.75, { opacity: 1, ease: Power1.easeOut }, "frame1+=0.5")
    .to("#line1,#line2,#line3", 0.75, { x: 0, opacity: 1, ease: Power1.easeOut }, "frame1+=1.2")
    .to("#line4,#line5,#legalCopy1", 0.75, { opacity: 1, ease: Power1.easeOut }, "frame1+=1.8")

  // ----------Frame 2 ------------
  tl.addLabel("frame2", "4.3")
    .to("#plus1", 1.15, { x: -297, ease: Power3.easeOut }, "frame2")
    .to("#frame1", 0.75, { x: -300, ease: Power1.easeOut }, "frame2")
    .to("#frame2,#logo2", 0.75, { x: 0, opacity: 1, ease: Power1.easeOut }, "frame2")
    .to("#plus2", 1.15, { x: -202, opacity: 1, ease: Power3.easeOut }, "frame2")

  // ----------Frame 3 ------------
  tl.addLabel("frame3", "7.3")
    .to("#plus1,#plus2", 1.15, { x: -499, ease: Power3.easeOut }, "frame3")
    .to("#frame2", 0.75, { x: -300, ease: Power1.easeOut }, "frame3")
    .to("#frame3", 0.75, { x: 0, opacity: 1, ease: Power1.easeOut }, "frame3")
    .to("#equals", 1.15, { x: -199, opacity: 1, ease: Power3.easeOut }, "frame3")

  // ----------Frame 4 ------------
  tl.addLabel("frame4", "10.3")
    .to("#plus2", 1.15, { x: -699, ease: Power3.easeOut }, "frame4")
    .to("#frame3,#logo2", 0.75, { x: -300, ease: Power1.easeOut }, "frame4")
    .to("#frame4,#ctaBox", 0.75, { x: 0, opacity: 1, ease: Power1.easeOut }, "frame4")
    .to("#equals", 1.15, { x: -502, opacity: 1, ease: Power3.easeOut }, "frame4")



  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#ffd9f7', color: '#711e9f', ease: Power3.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#fff', color: '#da1710', ease: Power1.easeOut, force3D: true });
    }
  }
}
