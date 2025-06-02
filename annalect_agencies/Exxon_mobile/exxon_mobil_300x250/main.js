var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
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
    .set("#c1_a, #c1_b, #c1_c, #c1_d, #bg2,#bg4, #c2_a, #c2_b, #c2_c, #c3_a, #c3_b,#c3_c, #c3_d,#c3_e, #logo, #c4_a, #c4_b, #c4_c, #ctaCopy, #ctaArrow, #eng", { opacity: 0, force3D: true })
    .set("#copy1, #c1_a, #c1_b, #c1_c, #c1_d, #c2_a, #c2_b, #c2_c, #copy2,#copy3,#c3_b,#c3_c, #c3_d,#c3_e, #copy3,  #c4_a, #c4_b, #c4_c", { x: -500, force3D: true })
    .set("#ctaCopy", { x: 25, force3D: true })
    .set("#ctaArrow", { x: 25, force3D: true })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#logo', 1, { opacity: 1, ease: Power4.easeInOut }, "frame1")
    .to('#eng', 3, { opacity: 1, ease: Power4.easeInOut }, "frame1")
    .fromTo('#rotateImg', 4, { scale: 0.9, rotationZ: '0.2deg', ease: Linear.easeNone }, { scale: 1, rotationZ: '0.2deg', ease: Linear.easeNone }, "frame1")
    .staggerTo("#copy1, #c1_a, #c1_b, #c1_c, #c1_d", 1.2, { x: 0, opacity: 1, ease: Power2.easeOut }, 0.2, "frame1+=1.5");

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "5.0")
    .to('#bg1, #c1_a, #c1_b, #c1_c, #c1_d', 0.5, { opacity: 0, ease: Power4.easeInOut }, "frame2+=0")
    .to('#frame2', 0.2, { opacity: 1 }, "frame2+=0.3")
    // .fromTo('#bg2', 4, { opacity: 1, scale: 1.1, rotationZ: '0.2deg', ease: Linear.easeNone }, { scale: 1.1, rotationZ: '0.2deg', ease: Linear.easeNone }, "frame2+=0.2")
    .staggerTo("#copy2, #c2_a, #c2_b, #c2_c", 0.8, { x: "0", opacity: 1, ease: Power2.easeOut }, 0.2, "frame2+=0.5");

  //---------- Frame 3 ------------
  // tl.addLabel("frame3", "8.0")
  //   .to('#bg2, #c2_a, #c2_b', 0.5, { opacity: 0, ease: Power4.easeInOut }, "frame3+=0")
  //   .to('#frame4', 0.2, { opacity: 1 }, "frame3+=0.3")
  //   // .fromTo('#bg4', 4, { opacity: 1, scale: 1.1, rotationZ: '0.2deg', ease: Linear.easeNone }, { scale: 1.1, rotationZ: '0.2deg', ease: Linear.easeNone }, "frame3+=0.2")
  //   .to(" #c3_a, #c3_b", 0.5, { x: "0", opacity: 1, ease: Power2.easeInOut }, 0.2, "frame3+=0.5")
  //   .staggerTo("#copy3, #c3_c, #c3_d,#c3_e", 0.8, { x: "0", opacity: 1, ease: Power2.easeOut }, 0.2, "frame3+=0.5");

  //---------- Frame 4 ------------
  tl.addLabel("frame4", "9.0")
    .to('#bg2, #c2_a, #c2_b, #c2_c', 0.5, { opacity: 0, ease: Power4.easeInOut }, "frame4+=0")
    // .to('#frame3, #copy3, #c3_a, #c3_b,#c3_c, #c3_d,#c3_e', 0.5, { opacity: 0, ease: Power4.easeOut }, "frame4+=0.5")
    // .to("#bg3", 4, { opacity: 1, scale: 1.1, rotationZ: '0.2deg', ease: Linear.easeNone }, { scale: 1.1, rotationZ: '0.2deg', ease: Linear.easeNone }, "frame3")
    .staggerTo("#copy4,  #c4_a, #c4_b, #c4_c", 0.8, { x: "0", opacity: 1, ease: Power2.easeOut }, 0.2, "frame4+=0.5")
    .staggerTo("#ctaCopy, #ctaArrow", 1, { x: "0", opacity: 1, ease: Power1.easeInOut }, 0.1, "frame4+=1.8")
    .fromTo('#ctaArrow', .5, { x: "0" }, { rotationZ: '0deg', x: 15, ease: Power2.easeOut, force3D: true }, "frame4+=2.8")
    .to('#ctaArrow', .3, { rotationZ: '0deg', x: 0, ease: Power1.easeIn }, "frame4+=3.2");


  var ctaArrow = document.getElementById("ctaArrow");

  function ctaOver(e) {
    if (ctaArrow.style.opacity == 1) {
      tl
        .fromTo(" #ctaArrow", 0.2, { x: 0 }, { x: 15, ease: Power1.easeIn, force3D: true })
    }
  }

  function ctaOut(e) {
    if (ctaArrow.style.opacity == 1) {
      tl
        .to(" #ctaArrow", 0.2, { x: 0, ease: Power1.easeIn, force3D: true })
    }

  }

}
