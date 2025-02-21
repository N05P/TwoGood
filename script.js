let cur = document.querySelector("#cursor");
let main = document.querySelector("#page4")

function power(){

    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

power();


main.addEventListener("mousemove",function(dets){
    gsap.to(cur,{
       x:dets.x,
       y:dets.y
    })
})
document.querySelectorAll("#page4 .card2").forEach(function(dets){
    dets.addEventListener("mouseenter",function(){
        gsap.to(cur,{
            transform:"translate(-50%,-50%) scale(1)"
        })
    })
    dets.addEventListener("mouseleave",function(){
        gsap.to(cur,{
            transform:"translate(-50%,-50%) scale(0)"
        })
    })
})

let line = document.querySelector("#line");

let tl = gsap.timeline();

tl.from("#navbar",{
    y:-40,
    opacity:0,
})

tl.from("#txt h1",{
    y:80,
    duration:0.6,
    opacity:0,
    stagger:0.3
})

tl.from("#page1 img",{
    opacity:0,
    scale:1.1
})


gsap.from("#page2 .card",{
    duration:0.4,
    scale:0.5,
    stagger:0.4,
    opacity:0,
    ease:"power2.out",
    force3D:true,
    backgroundPosition:"center",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"bottom 60%",
    }
})


gsap.from("#page4 .card2",{
    y:40,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 0%",
    }
})


gsap.to("#navbar #logo",{
    y:-120,
    duration:1,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"#main",
        start:"bottom 10%",
        scrub:true
    }
})
gsap.to("#navbar #menu",{
    y:-120,
    duration:1,
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"#main",
        start:"bottom 10%",
        scrub:true
    }
})