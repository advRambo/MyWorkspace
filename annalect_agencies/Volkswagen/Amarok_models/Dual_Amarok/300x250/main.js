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
    .set("#text1,#text2,#dealerList,#carDiv,#leftWheelBox,#rightWheelBox,#ctaBlueBox,#disclaimer_container,#tc_close,#tc_open,#ctaBox,#frame4box,#logoBlue,#leftWheelCar1,#leftWheelCar2,#rightWheelCar1,#rightWheelCar2", { opacity: 0, force3D: true })
    // .set("#bg1", { scale: 1.2, transformOrigin: '70% 60%', force3D: true })
    .set("#car1,#car2", { x: 300, y: -50, translateZ: 50, transformOrigin: '70% 60%', force3D: true })
    .set("#leftWheelCar1,#leftWheelCar2", { x: 300, y: -50, rotationZ: 0.001, rotationX: 2, rotationY: 38, force3D: true })
    .set("#rightWheelCar1,#rightWheelCar2", { x: 300, y: -50, rotationZ: 0.001, rotationX: 0, rotationY: 65, force3D: true })
    .set("#carDiv1,#carDiv2", { x: 300, transformOrigin: '70% 60%', force3D: true })
    .set("#leftWheelBox1,#rightWheelBox1,#leftWheelBox2,#rightWheelBox2", { x: 300, transformOrigin: '50% 45%', rotationZ: 0.001, force3D: true })
    .set("#tc_open", { zIndex: 2 })
    .set("#disclaimer_container", { zIndex: 0 })
    .set("#logoBlue", { y: 50 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "0.3")
    .to("#tc_open, #ctaBox, #ctaBlueBox", 0, { opacity: 0 }, "frame1")
    .to("#tc_open", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1")
    .to("#car1", 1, { x: 0, y: 0, translateZ: 0, opacity: 1, ease: Power1.easeOut }, "frame1+=0.3")
    .to("#leftWheelCar1,#rightWheelCar1", 1, { opacity: 1, x: 0, y: 0, rotationZ: 0.001, ease: Power1.easeOut }, "frame1+=0.3")
    .to("#leftWheelC1, #rightWheelC1", 1, { rotation: -1440, ease: Power1.easeOut }, "frame1+=0.3")
    .to("#text1", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=0.3")
    .to("#car2", 1, { x: 0, y: 0, translateZ: 0, opacity: 1, ease: Power1.easeOut }, "frame1+=1")
    .to("#leftWheelCar2,#rightWheelCar2", 1, { opacity: 1, x: 0, y: 0, rotationZ: 0.001, ease: Power1.easeOut }, "frame1+=1")
    .to("#leftWheelC2, #rightWheelC2", 1, { rotation: -1440, ease: Power1.easeOut }, "frame1+=1")
    .to("#text2", 0.5, { opacity: 1, ease: Power2.easeOut }, "frame1+=1")
    .to("#logoBlueSide", 0.5, { x: 50, opacity: 0, ease: Power4.easeOut }, "frame1+=4.8")
  // .to("#ctaBox", 0.8, { opacity: 1, ease: Power2.easeOut }, "frame1+=1")

  // ----------Frame 2 ------------
  // tl.addLabel("frame2", "4")
  //   .to('#text1', 0.5, { opacity: 0, ease: Power2.easeOut }, "frame2")
  //   .to("#text2", 0.5, { opacity: 1, ease: Power0.easeInOut }, "frame2+=0.5")
  // .to("#car2", 1.3, { x: 0, opacity: 1, rotationZ: 0.001, ease: Power1.easeInOut }, "frame2+=0.5")

  // ----------Frame 3 ------------
  tl.addLabel("frame2", "5")
    .to("#leftWheelCar1,#rightWheelCar1,#leftWheelCar2,#rightWheelCar2", 0.1, { opacity: 0, ease: Power2.easeInOut }, "frame2")
    .to("#text1,#text2,#car1,#car2,#logoBlueSide,#tc_open", 0.2, { opacity: 0, ease: Power2.easeInOut }, "frame2")
    .to("#frame4box", 1, { height: 161.5, opacity: 1, ease: Power1.easeOut }, "frame2+=0.3")
    .to("#tc_open", 0, { zIndex: 0 }, "frame2")
    .to("#dealerList,#ctaBox", 0.5, { opacity: 1, y: 0, ease: Power0.easeInOut }, "frame2+=1.3")
    .to("#logoBlue", 0.5, { opacity: 1, y: 0, ease: Power2.easeOut }, "frame2+=0.5")
    .to("#carDiv1,#carDiv2", 0, { opacity: 1 }, "frame2+=1.3")
    .to("#carDiv1", 1.3, { opacity: 1, x: 0, y: 0, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=1.6")
    .to("#leftWheelBox1", 1.3, { opacity: 1, x: 0, y: 0, rotation: -1440, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=1.6")
    .to("#rightWheelBox1", 1.3, { opacity: 1, x: 0, y: 0, rotation: -1523, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=1.6")
    .to("#carDiv2", 1.3, { opacity: 1, x: 0, y: 0, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=2.6")
    .to("#leftWheelBox2", 1.3, { opacity: 1, x: 0, y: 0, rotation: -1440, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=2.6")
    .to("#rightWheelBox2", 1.3, { opacity: 1, x: 0, y: 0, rotation: -1523, rotationZ: 0.001, ease: Power2.easeOut }, "frame2+=2.6")

  function ctaOver(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#001e50', opacity: 1, ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#001e50', opacity: 1, ease: Quad.easeOut, force3D: true });
    }
  }

  function ctaOut(e) {
    if (ctaBox.style.opacity == 1) {
      TweenLite.to('#ctaBox', .5, { backgroundColor: '#00b0f0', ease: Quad.easeOut, force3D: true });
    } else if (ctaBlueBox.style.opacity == 1) {
      TweenLite.to('#ctaBlueBox', .5, { backgroundColor: '#00b0f0', ease: Quad.easeOut, force3D: true });
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
