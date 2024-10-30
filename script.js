function scroller() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
scroller()

function gsapanimation() {
  gsap.from(".nav", {
    y: -30,
    delay: 0.15,
    duration: 0.3,
    opacity: 0,
    position: "fixed",
    top: 0,
    left: 0
  })

  gsap.from(".page1 .page1-content h1", {
    y: 60,
    duration: 0.2,
    delay: 0.9,
    opacity: 0,
    stagger: 0.15
  })

  gsap.from(".page1 .page1-content .page1-video video", {
    scale: 0.7,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page1 .page1-content .page1-video video",
      scroller: ".main",
      start: "top 90%",
      end: "top 80%"
    }
  })

  gsap.from(".page2 .images .img", {
    y: 120,
    duration: 0.4,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page2 .images .img",
      scroller: ".main",
      start: "top 80%",
      end: "top 65%"
    }
  })

  gsap.from(".page3 .shop-section .stagger1", {
    y: 30,
    duration: 0.4,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3 .shop-section .stagger1",
      scroller: ".main",
      start: "top 80%",
      end: "top 65%"
    }
  })

  gsap.from(".page3 .shop-section .stagger2", {
    y: 30,
    duration: 0.4,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3 .shop-section .stagger2",
      scroller: ".main",
      start: "top 70%",
      end: "top 60%"
    }
  })

  gsap.from(".page3 .shop-section .stagger3", {
    y: 30,
    duration: 0.4,
    opacity: 0,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".page3 .shop-section .stagger3",
      scroller: ".main",
      start: "top 70%",
      end: "top 60%"
    }
  })

  gsap.from(".page4 .page4-img .image", {
    duration: 0.4,
    opacity: 0,
    stagger: 0.15,
    scrollTrigger: {
      trigger: ".page4 .page4-img .image",
      scroller: ".main",
      start: "top 60%",
      end: "top 50%"
    }
  })
}
gsapanimation()

function moveanimation(){
  var video = document.querySelector(".page1-video")
  var play = document.querySelector(".play")

  video.addEventListener("mouseenter",function(){
   gsap.to(play,{
    opacity: 1,
    scale: 1,
    duration: 0.4
   })
  })

  video.addEventListener("mouseleave",function(){
    gsap.to(play,{
      opacity: 0,
      scale: 0,
      duration: 0.4
     })
  })

  video.addEventListener("mousemove",function(dets){
    gsap.to(play,{
      left: dets.x-100,
      top: dets.y-100
     })
  })
}
moveanimation()

// function whiteanimation(){
//   var box = document.querySelectorAll(".page3 .shop-section .box")
//   var white = document.querySelectorAll(".page3 .white-circle")

//   box.addEventListener("mouseenter",function(){
//     gsap.to(white,{
//       opacity: 1,
//       scale: 1,
//       duration: 0.3
//     })
//   })

//   box.addEventListener("mouseleave",function(){
//     gsap.to(white,{
//       opacity: 0,
//       scale: 0,
//       duration: 0.3
//     })
//   })

//   box.addEventListener("mousemove",function(dets){
//     gsap.to(white,{
//       left: dets.x,
//       top: dets.y
//     })
//   })
// }
// whiteanimation()