

let pageOneAnimation = () => {
  let btn = document.querySelector(".box-info button");
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#000";
    btn.style.transition = "0.4s";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = "#000";
    btn.style.color = "#fff";
    btn.style.transition = "0.4s";
  });

  let tl = gsap.timeline();

  tl.from("nav h1,.list ul li, nav ul button", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
  });

  tl.from(
    ".part_1 .box-info h2, .part_1 .box-info p ,.part_1 .box-info button",
    {
      x: -200,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    }
  );
  tl.from(
    ".part_2 .img-div img",
    {
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    },
    "-=.5"
  );
  tl.from(".page1-logoList .images-div img", {
    y: 100,
    duration: 0.6,
    stagger: 0.1,
  });
};
pageOneAnimation();




let tl = gsap.timeline();

tl.from(".page_2 .containers",{

  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".page_2 .containers",
    scroller:true,
    scrub:1
  }

})