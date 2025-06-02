var tl = new TimelineMax({ onComplete: endFrame, repeat: 1, repeatDelay: 2 });
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
    .set("#text1,#text2,#bg2,#bg3,#dealerList,#ctaBlueBox,#disclaimer_container,#tc_close,#tc_open,#ctaBox,#logoBlue", { opacity: 0, force3D: true })
    .set("#bg2", { scale: 1.2, transformOrigin: '70% 60%', force3D: true })
    .set("#bg1", { x: 0, y: -8 })
    .set("#text3Box", { x: -125 })
    .set("#tc_open", { zIndex: 2 })
    .set("#bgFrame", { height: 0 })
    .set("#disclaimer_container", { zIndex: 0 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "0.2")
    .to("#ctaBlueBox,#ctaBox", { opacity: 0 }, "frame1")
    .to("#bgFrame", 0.3, { height: 138.5, ease: Power3.easeOut }, "frame1")
    .to("#tc_open", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=0.3")
    .to("#text1", 0.5, { opacity: 1, ease: Power3.easeOut }, "frame1+=0.3")
    .to("#box1,#box1_1", 0.5, { width: 0, ease: Quad.easeOut }, "frame1+=0.3")
    .to("#boxFrame", 0, { opacity: 0, ease: Power1.easeOut }, "frame1+=1")
    .to('#bg1', 2.75, { x: -39, rotationZ: 0.001, ease: Power3.ease }, "frame1+=0.25")
  // .to("#ctaBox", 0.8, { opacity: 1, ease: Power2.easeOut }, "frame1+=1")

  // ----------Frame 2 ------------
  tl.addLabel("frame2", "5")
    .to("#text1", 0.2, { opacity: 0, ease: Power4.easeOut }, "frame2")
    .to("#bg2", 0.2, { opacity: 1, ease: Power4.easeIn }, "frame2")
    .to('#bg2', 3, { scale: 1, rotationZ: 0.001, ease: Linear.easeInOut }, "frame2+=0.1")
    .to("#text2", 0.2, { opacity: 1, ease: Power4.easeOut }, "frame2+=0.2")
    .to("#text3Box", 0.5, { x: 0, ease: Power2.easeOut }, "frame2+=0.3")
    .to("#bg1", 0, { opacity: 0, ease: Power2.easeOut }, "frame2+=1.0")

  // // ----------Frame 3 ------------
  tl.addLabel("frame3", "10")
    .to("#text3Box,#text2", 0.2, { opacity: 0, ease: Power4.easeOut }, "frame3")
    .to("#bg3", 0.2, { opacity: 1, ease: Power4.easeIn }, "frame3")
    .to('#bg3', 3.9, { scale: 1.15, x: -2, y: -1, rotationZ: 0.001, ease: Linear.easeInOut }, "frame3+=0.2")
    .to("#dealerList", 0.5, { opacity: 1, ease: Power1.easeInOut }, "frame3+=0.3")
    .to("#ctaBox", 0.5, { opacity: 1, ease: Power1.easeInOut }, "frame3+=0.3")
    .to("#bg2", 0, { opacity: 0, ease: Power2.easeOut }, "frame3+=1.0")


  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#00b0f0', opacity: 1, ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#00b0f0', opacity: 1, ease: Quad.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#001e50', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#001e50', ease: Quad.easeOut, force3D: true });
    }

  }

  function legalOpen(e) {
    if (tc_open.style.opacity == 1) {
      TweenLite.to('#disclaimer_container,#tc_close', .5, { autoAlpha: 1, zIndex: 3, ease: Power4.easeOut, force3D: true });
      // TweenLite.to('#ctaBox,#ctaBlueBox,#tc_open', .3, { zIndex: 0, opacity: 0, force3D: true, ease: Power2.easeOut });
    }

  }
  function legalClose(e) {
    if (tc_close.style.opacity == 1) {
      TweenLite.to('#disclaimer_container,#tc_close', 0.25, { autoAlpha: 0, zIndex: 0, force3D: true, ease: Power4.easeOut });
      // TweenLite.to('#ctaBox,#ctaBlueBox', 0.2, { zIndex: 0, opacity: 1, force3D: true, ease: Power4.easeOut });
      TweenLite.to('#tc_open', 0, { zIndex: 2, opacity: 1, force3D: true, ease: Power4.easeOut });
    }
  }
}
