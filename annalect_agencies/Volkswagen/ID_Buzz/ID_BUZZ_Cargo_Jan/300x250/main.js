var tl = new TimelineMax({ onComplete: endFrame, repeat: 1, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {

  document.getElementById("exitLink").addEventListener('mouseover', ctaOver, false);
  document.getElementById("exitLink").addEventListener('mouseout', ctaOut, false);
  // document.getElementById("tc_open").addEventListener('click', legalOpen, false);
  // document.getElementById("tc_close").addEventListener('click', legalClose, false);

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
    // .set("#text1,#text2,#text21,#bg2,#car1,#car2,#text2,#wheel1left,#wheel2left,#wheel11right,#wheel2right,#frame4Box,#frame4Box2,#dealerList,#carDiv,#leftWheelBox,#rightWheelBox,#ctaBlueBox,#disclaimer_container,#tc_close,#tc_open,#ctaBox", { opacity: 0, force3D: true })
    .set("#ctaBox,#ctaBlueBox,#text1", { opacity: 0, force3D: true })
    .set("#frame2,#logoBox", { width: 0, force3D: true })
    .set("#frame4", { x: 300, force3D: true })
    // .set("", { width: 0, force3D: true })
    .set("#car1", { x: 300, transformOrigin: '70% 60%', force3D: true })
    .set("#wheel1left,#wheel1right", { x: 300, transformOrigin: '50% 46%', rotationZ: 0.001, force3D: true })



  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .set("#ctaBox,#ctaBlueBox", { opacity: 0, force3D: true }, "frame1")
    .to("#car1", 0.3, { opacity: 1, ease: Power0.easeOut }, "frame1")
    .to("#car1", 1.3, { x: 0, rotationZ: 0.001, ease: Power2.easeOut }, "frame1+=0.3")
    .to("#wheel1left,#wheel1right", 1.3, { opacity: 1, x: 0, rotation: -1080, rotationZ: 0.001, ease: Power2.easeOut }, "frame1+=0.3")
    .to("#text1", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=0.5")
    .to("#wheel1left", 5, { opacity: 1, rotation: -3500, rotationZ: 0.001, ease: Quad.easeOut }, "frame1+=1")
    .to("#wheel1right", 5, { opacity: 1, rotation: -3500, rotationZ: 0.001, ease: Quad.easeOut }, "frame1+=1")

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "3.5")
    .to("#frame2,#logoBox", 0.8, { width: 300, ease: Power1.easeOut }, "frame2")
    // .to("#car2", 1.3, { x: 0, rotationZ: 0.001, ease: Power1.easeOut }, "frame2")
    .to("#wheel2left", 6, { opacity: 1, rotation: -2800, rotationZ: 0.001, ease: Linear.ease, transformOrigin: '50% 46%', force3D: true }, "frame2-=0.1")
    .to("#wheel2right", 6, {
      opacity: 1, rotation: -2800, rotationZ: 0.001, ease: Linear.ease, transformOrigin: '50% 46%', force3D: true
    }, "frame2-=0.1")
    .to("#frame1", 0.5, { x: -300, ease: Power1.easeOut }, "frame2+=0.8")
    .to("#wheel1left,#wheel1right", 0.5, { rotation: -3000, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=0.8")


  // ----------Frame 4 ------------
  tl.addLabel("frame4", "7")
    .to("#frame2", 1.15, { x: -300, ease: Power1.easeOut }, "frame4")
    .to("#wheel2left,#wheel2right", 1, { rotation: -2700, rotationZ: 0.001, ease: Power2.easeOut }, "frame4")
    .to("#frame4", 1.15, { x: 0, ease: Power1.easeOut }, "frame4")
    .to("#carDivBig", 1.3, { x: 0, rotationZ: 0.001, ease: Power1.easeOut }, "frame4")
    .to("#leftWheelBox,#rightWheelBox", 1.3, { opacity: 1, x: 0, transformOrigin: '50% 50%', rotation: -1080, rotationZ: 0.001, ease: Power1.easeOut }, "frame4")
    .to("#ctaBlueBox", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame4+=1.4")


  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#001e50', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
      // TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#00b0f0', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaWhiteCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#fff', ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaCopy', .5, { color: '#001e50', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#fff', ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaWhiteCopy', .5, { color: '#001e50', ease: Quad.easeOut, force3D: true });
    }

  }

  function legalOpen(e) {
    if (tc_open.style.opacity == 1) {
      TweenLite.to('#disclaimer_container,#tc_close', .5, { autoAlpha: 1, ease: Quad.easeOut, ease: Power4.easeOut, force3D: true });
      TweenLite.to('#ctaBox,#ctaBlueBox', 0, { zIndex: -1, force3D: true, ease: Power4.easeOut });
    }

  }
  function legalClose(e) {
    if (tc_close.style.opacity == 1) {
      TweenLite.to('#disclaimer_container,#tc_close', 0.25, { autoAlpha: 0, force3D: true, ease: Power4.easeOut });
      TweenLite.to('#ctaBox,#ctaBlueBox', 0, { zIndex: 0, force3D: true, ease: Power4.easeOut });
    }
  }
}
