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
    .set("#text1,#bg2,#car1,#car2,#text2,#wheel1left,#wheel2left,#wheel11right,#wheel2right,#frame4Box,#frame4Box2,#dealerList,#carDiv,#leftWheelBox,#rightWheelBox,#ctaBlueBox,#disclaimer_container,#tc_close,#tc_open,#ctaBox", { opacity: 0, force3D: true })
    .set("#frame4Box,#frame4Box2,#carDiv,#car1,#car2,#bg2", { x: 300, transformOrigin: '70% 60%', force3D: true })
    .set("#leftWheelBox,#rightWheelBox,#wheel1left,#wheel2left,#wheel1right,#wheel2right", { x: 300, transformOrigin: '50% 46%', rotationZ: 0.001, force3D: true })

  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .set("#tc_open, #ctaBox,#ctaBlueBox", { opacity: 0, force3D: true }, "frame1")
    .to("#car1", 0.3, { opacity: 1, ease: Power0.easeOut }, "frame1")
    .to("#car1", 1.3, { x: 0, rotationZ: 0.001, ease: Power0.out }, "frame1+=0.3")
    .to("#wheel1left,#wheel1right", 1.3, { opacity: 1, x: 0, rotation: -720, rotationZ: 0.001, ease: Power0.out }, "frame1+=0.3")
    .to("#text1", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=0.3")
    .to("#text2", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame1+=1")

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "3.5")
    .to("#bg1", 1.15, { x: -300, ease: Power1.easeOut }, "frame2")
    .to("#car1", 0.75, { x: -300, ease: Power0.easeOut }, "frame2")
    .to("#wheel1left,#wheel1right", 0.75, { opacity: 1, x: -300, rotation: -1440, rotationZ: 0.001, ease: Power0.easeOut }, "frame2")
    .to('#bg2', 1.15, { opacity: 1, x: 0, ease: Power1.easeOut }, "frame2")
    .to("#car2", 0, { opacity: 1 }, "frame2")
    .to("#car2", 1.3, { x: 0, rotationZ: 0.001, ease: Power0.out }, "frame2+=0.2")
    .to("#wheel2left,#wheel2right", 1.3, { opacity: 1, x: 0, rotation: -720, rotationZ: 0.001, ease: Power0.out }, "frame2+=0.2")

  //---------- Frame 4 ------------
  tl.addLabel("frame4", "6.5")
    // .to("#bg2", 1.15, { x: -300, ease: Power1.easeOut }, "frame4")
    .to("#text1,#text2", 0.5, { opacity: 0, ease: Power1.easeOut }, "frame4")
    .to("#car2", 0.75, { x: -300, ease: Power0.easeOut }, "frame4")
    .to("#wheel2left,#wheel2right", 0.75, { opacity: 1, x: -300, rotation: -1440, rotationZ: 0.001, ease: Power0.easeOut }, "frame4")
    .to("#bg2", 1, { height: 162, backgroundColor: '#303b4e', opacity: 1, ease: Power1.easeOut }, "frame4+=0.75")
    .to("#ctaBlueBox,#dealerList", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame4+=1.4")
    .to("#carDiv", 0, { opacity: 1 }, "frame4+=1.4")
    .to("#carDiv", 1.3, { opacity: 1, x: 0, rotationZ: 0.001, ease: Power3.easeOut }, "frame4+=1.5")
    .to("#leftWheelBox,#rightWheelBox", 1.3, { opacity: 1, x: 0, rotation: -1440, rotationZ: 0.001, ease: Power3.easeOut }, "frame4+=1.5")

  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#001e50', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
      // TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#fff', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaWhiteCopy', .5, { color: '#001e50', ease: Quad.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#fff', ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaCopy', .5, { color: '#001e50', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#00b0f0', ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaWhiteCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
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
