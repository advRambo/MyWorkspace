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
    .set("#bg2,#copyImg2,#bg3,#copyImg3,#bg4,#copyImg4,#legalBlack,#logo,#scanCopyImg,#planCopyImg,#nycCopyImg,#mcCopyImg,#revealBox1, #revealBox2, #ctaBox", { opacity: 0 })
    .set("#copyImg1,#copyImg2,#copyImg3,#copyImg4,#scanCopyImg,#planCopyImg", { x: -300 })
    .set("#ctaShine", { x: -200 })
    .set("#revealBox2,#ctaBox", { width: 0 })
    .set("#legalWhite", { opacity: 1 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to("#bg1", 2.4, { scale: 1.1, ease: Quad.easeOut }, "frame1")
    .to("#copyImg1", .4, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame1")


  // ---------- Frame 2 ------------
  tl.addLabel("frame2", "2.4")
    .to("#bg1, #copyImg1", .4, { opacity: 0, ease: Quad.easeOut }, "frame2")
    .to("#bg2", .4, { opacity: 1, ease: Quad.easeOut }, "frame2+=.1")
    .to("#bg2", 2, { scale: 1.1, ease: Quad.easeOut }, "frame2+=.3")
    .to("#copyImg2", .4, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame2+=.4")

  // ---------- Frame 3 ------------
  tl.addLabel("frame3", "4.8")
    .to("#bg2, #copyImg2", .4, { opacity: 0, ease: Quad.easeOut }, "frame3")
    .to("#bg3", .4, { opacity: 1, ease: Quad.easeOut }, "frame3+=.1")
    .to("#bg3", 2, { scale: 1.1, ease: Quad.easeOut }, "frame3+=.3")
    .to("#copyImg3", .4, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame3+=.4")

  // ---------- Frame 4 ------------
  tl.addLabel("frame4", "7.2")
    .to("#bg3, #copyImg3", .4, { opacity: 0, ease: Quad.easeOut }, "frame4")
    .to("#bg4", .4, { opacity: 1, ease: Quad.easeOut }, "frame4+=.1")
    .to("#bg4", 2, { scale: 1.1, ease: Quad.easeOut }, "frame4+=.3")
    .to("#copyImg4", .4, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame4+=.4")

  // ---------- Frame 5 ------------
  tl.addLabel("frame5", "10")
    .to("#bg4, #copyImg4, #legalWhite", .4, { opacity: 0, ease: Quad.easeOut }, "frame5")
    .to("#legalBlack", .4, { opacity: 1, ease: Quad.easeOut }, "frame5")
    .to("#logo", .4, { opacity: 1, ease: Quad.easeOut }, "frame5+=.3")
    .to("#scanCopyImg", .4, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame5+=.4")
    .to("#planCopyImg", .4, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame5+=.8")
    .to("#revealBox1", .1, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame5+=1.1")
    .to("#nycCopyImg", .1, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame5+=1.2")
    .to("#revealBox1", .7, { x: 190, ease: Quad.easeOut }, "frame5+=1.2")

  // ---------- Frame 6 ------------
  tl.addLabel("frame6", "12.8")
    .to("#nycCopyImg", .4, { opacity: 0, x: 142, ease: Quad.easeOut }, "frame6")
    .to("#revealBox2", .3, { opacity: 1, width: 147, ease: Quad.easeOut }, "frame6")
    .to("#mcCopyImg", .2, { opacity: 1, x: 0, ease: Quad.easeOut }, "frame6+=.2")
    .to("#revealBox2", .6, { x: 142, ease: Quad.easeOut }, "frame6+=.1")
    .to("#ctaBox", .4, { opacity: 1, width: 140, ease: Quad.easeOut }, "frame6+=.9")
    .to("#ctaShine", .7, { x: 200 }, "frame6+=1.3")

  var ctaShineOver = document.getElementById("ctaBox")

  function ctaOver(e) {
    tl.set("#ctaShine", { opacity: 0, x: -200 })
    console.log('mouseOver')
    if (ctaShineOver.style.opacity == 1) {
      tl.to("#ctaShine", .7, { opacity: 1, x: 200 })
    }
  }

  function ctaOut(e) {
    console.log('mouseOut')
    if (ctaShineOver.style.opacity == 1) {
      tl.set("#ctaShine", { opacity: 0, x: -200 })
    }
  }

}
