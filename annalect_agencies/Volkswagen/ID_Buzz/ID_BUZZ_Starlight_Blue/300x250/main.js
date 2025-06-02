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
    .set("#text1,#car1,#wheel1left,#wheel1right,#frame4Box,#dealerList,#carDivBig,#leftWheelBox,#rightWheelBox,#ctaBlueBox,#disclaimer_container,#tc_close,#tc_open,#ctaBox", { opacity: 0, force3D: true })
    .set("#carDivBig,#car1", { x: 300, transformOrigin: '70% 60%', force3D: true })
    .set("#leftWheelBox,#rightWheelBox,#wheel1left,#wheel1right", { x: 300, transformOrigin: '50% 46%', rotationZ: 0.001, force3D: true })
    .set("#frame2, #frame3", { width: 0, force3D: true })



  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .set("#ctaBox,#ctaBlueBox", { opacity: 0, force3D: true }, "frame1")
    .to("#car1", 0.3, { opacity: 1, ease: Power0.easeOut }, "frame1")
    .to("#car1", 1.3, { x: 0, rotationZ: 0.001, ease: Power1.out }, "frame1+=0.3")
    .to("#wheel1left,#wheel1right", 1.3, { opacity: 1, x: 0, rotation: -720, rotationZ: 0.001, ease: Power1.out }, "frame1+=0.3")
    .to("#wheel1left", 10, { opacity: 1, rotation: -2880, rotationZ: 0.001, ease: Quad.easeOut }, "frame1+=1.2")
    .to("#wheel1right", 10, { opacity: 1, rotation: -3240, rotationZ: 0.001, ease: Quad.easeOut }, "frame1+=1.2")
    .to("#text1", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=0.3")

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "3.5")
    .to("#frame2", 0.8, { width: 300, ease: Power1.easeOut }, "frame2")
    .to("#frame1", 0, { opacity: 0, ease: Power2.easeOut }, "frame2+=1")
    .to("#wheel2left", 10, { opacity: 1, rotation: -2500, rotationZ: 0.001, ease: Quad.easeOut, transformOrigin: '50% 46%', force3D: true }, "frame2-=0.1")
    .to("#wheel2right", 10, { opacity: 1, rotation: -2800, rotationZ: 0.001, ease: Quad.easeOut, transformOrigin: '50% 46%', force3D: true }, "frame2-=0.1")

  //---------- Frame 2 ------------
  tl.addLabel("frame3", "7")
    .to("#frame3", 0.8, { width: 300, ease: Power1.easeOut }, "frame3")
    .to("#frame2", 0, { opacity: 0, ease: Power2.easeOut }, "frame3+=1")
    .to("#wheel3left,#wheel3right", 6, { opacity: 1, rotation: -2050, rotationZ: 0.001, ease: Quad.easeOut, transformOrigin: '50% 46%', force3D: true }, "frame3-=0.1")

  //---------- Frame 4 ------------
  tl.addLabel("frame4", "10.5")
    .to("#text1", 0.5, { opacity: 0, ease: Power1.easeOut, rotationZ: 0.001 }, "frame4+=0.3")
    .to("#car3", 1, { x: -300, ease: Power0.easeOut, rotationZ: 0.001 }, "frame4")
    .to("#wheel3left,#wheel3right", 1, { x: -300, rotation: -3000, ease: Power0.easeOut, rotationZ: 0.001 }, "frame4")
    .to("#bg3", 0.5, { height: 79, y: 0, backgroundColor: "#174e82", ease: Power2.easeIn }, "frame4+=1")
    .to("#ctaBlueBox,#dealerList", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame4+=1.4")
    .to("#carDivBig", 0, { opacity: 1 }, "frame4+=1.4")
    .to("#carDivBig", 1.3, { opacity: 1, x: 0, rotationZ: 0.001, ease: Power2.easeOut }, "frame4+=1.5")
    .to("#leftWheelBox,#rightWheelBox", 1.3, { opacity: 1, x: 0, rotation: -1440, rotationZ: 0.001, ease: Power2.easeOut }, "frame4+=1.5")

  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#00b0f0', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
      // TweenLite.to('#ctaCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#00b0f0', opacity: 1, ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaWhiteCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#001e50', ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaCopy', .5, { color: '##fff', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#001e50', ease: Quad.easeOut, force3D: true });
      TweenLite.to('#ctaWhiteCopy', .5, { color: '#fff', ease: Quad.easeOut, force3D: true });
    }

  }
}
