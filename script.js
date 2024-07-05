

gsap.registerPlugin("ScrollTrigger");



 

  gsap.to(".box1", {
     scrollTrigger: {
    trigger: "#three",
    start: "top 35%",
    end: "bottom 85%",
    scrub:4,   
     },
   scale:1.7,
   
     r:699,
    });
   gsap.to(".box2", {
      scrollTrigger: {
     trigger: ".box2",
     start: "top 175%",
     end: "bottom 95%",
     scrub:4,   
      },
      r:759,
   scaleY:1.1,
      scaleX:0.68,
      
     });


     gsap.to(".mask", {r:959,scale:3.6, duration:1.2,});
 // 3D Scroll


 