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
  document.getElementById("tc_open").addEventListener('click', legalOpen, false);
  document.getElementById("tc_close").addEventListener('click', legalClose, false);

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
    .set("#text1,#bg2,#text2,#bg3,#text3,#frame4Box,#dealerList,#carDiv,#leftWheelBox,#rightWheelBox,#logoBlue,#ctaBlueBox,#disclaimer_container,#tc_close,#tc_open,#ctaBox", { opacity: 0, force3D: true })
    .set("#bg1", { scale: 1.2, transformOrigin: '70% 60%', force3D: true })
    .set("#carDiv", { x: 300, transformOrigin: '70% 60%', force3D: true })
    .set("#bg2", { x: -54, force3D: true })
    .set("#leftWheelBox,#rightWheelBox", { x: 300, rotationZ: 0.001, force3D: true })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to("#tc_open, #ctaBox, #ctaBlueBox", 0, { opacity: 0 }, "frame1")
    .to("#tc_open", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1")
    .to('#bg1', 3, { scale: 1, rotationZ: 0.001, ease: Power0.easeOut }, "frame1")
    .to("#text1", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=0.3")
    .to("#ctaBox", 0.8, { opacity: 1, ease: Power2.easeOut }, "frame1+=1")

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "3.1")
    .to('#text1', 0.5, { opacity: 0, ease: Power2.easeOut }, "frame2")
    .to('#bg2', 0.1, { opacity: 1, ease: Power0.easeOut }, "frame2")
    .to('#bg2', 7, { x: 0, rotationZ: 0.001, ease: Linear.easeInOut }, "frame2+=0.1")
    .to('#bg1', 0.1, { opacity: 0, scale: 1.2, rotationZ: 0.001, ease: Power0.easeInOut }, "frame2+=1.6")
    .to("#text2", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame2+=0.1")
  // .to("#price", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame2+=0.6")

  //---------- Frame 3 ------------
  tl.addLabel("frame3", "7.5")
    .to('#text2', 0.5, { opacity: 0, ease: Power2.easeOut }, "frame3")
    // .to('#bg2', 0.3, { opacity: 0, ease: Power0.easeOut }, "frame3")
    // .to('#bg1', 0.3, { opacity: 1, ease: Power0.easeOut }, "frame3+=0.2")
    // .to('#bg1', 3, { scale: 1, rotationZ: 0.001, ease: Power0.easeInOut, ease: Power0.easeOut }, "frame3+=0.5")
    .to('#text3', 0.5, { opacity: 1, ease: Power0.easeOut }, "frame3+=0.3")

  //---------- Frame 4 ------------
  tl.addLabel("frame4", "10")
    .to("#logoWhite", 0.2, { opacity: 0, x: -50, ease: Quad.easeInOut }, "frame4-=0.3")
    .to("#tc_open", 0.2, { opacity: 0, ease: Quad.easeInOut }, "frame4-=0.3")
    .to("#logoBlue", 0.5, { opacity: 1, x: -214, ease: Quad.easeInOut }, "frame4-=0.3")
    .to("#bg2,#text3,#tc_open,#ctaBox,#ctaCopy", 0.3, { opacity: 0, ease: Power0.easeInOut }, "frame4")
    .to("#frame4Box", 0.3, { opacity: 1, ease: Power0.easeInOut }, "frame4+=0.3")
    .to("#ctaBlueBox,#dealerList", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame4+=1")
    .to("#carDiv", 0, { opacity: 1 }, "frame4+=1")
    .to("#carDiv", 1.1, { opacity: 1, x: 0, rotationZ: 0.001, ease: Power2.easeOut }, "frame4+=1.3")
    .to("#leftWheelBox,#rightWheelBox", 1.1, { opacity: 1, x: 0, rotation: -1440, rotationZ: 0.001, ease: Power2.easeOut }, "frame4+=1.3")

  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#transparentBlack', .5, { backgroundColor: '#fff', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaBox', .5, { color: '#00b0f0', ease: Quad.easeOut, force3D: true });
      // TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#transparentBlack2', .5, { backgroundColor: '#fff', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaBlueBox', .5, { color: '#00b0f0', ease: Quad.easeOut, force3D: true });
      // TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#transparentBlack', .5, { backgroundColor: '#000', opacity: 0.35, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaBox', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#transparentBlack2', .5, { backgroundColor: '#000', opacity: 0.35, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaBlueBox', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
      // TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
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
