// cursor
const cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");

document.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x + 20,
    y: dets.y + 20,
    duration: 1.1,
    ease: "back.out",
  });
});

// cursor animation
function cAnimation() {
  let vdo1 = document.querySelector(".page1 video");
  let vdo2 = document.querySelector(".page3 video");
  let pic = document.querySelector(".page3 img");
  let vdo3 = document.querySelector(".page3-part2 video");
  let pic3 = document.querySelector(".page3-part2 img");

  vdo1.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-in");
    cursor.classList.remove("cursor");
    cursor.innerHTML = "<p>sound on</p>";
  });

  vdo1.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-in");
    cursor.classList.add("cursor");
    cursor.innerHTML = " ";
  });

  vdo2.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-in");
    cursor.classList.remove("cursor");
    cursor.innerHTML = "<p>sound on</p>";
  });

  vdo2.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-in");
    cursor.classList.add("cursor");
    cursor.innerHTML = " ";
  });

  pic.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-in");
    cursor.classList.remove("cursor");
    cursor.innerHTML = "<p>sound on</p>";
  });

  pic.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-in");
    cursor.classList.add("cursor");
    cursor.innerHTML = " ";
  });

  vdo3.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-in");
    cursor.classList.remove("cursor");
    cursor.innerHTML = "<p>sound on</p>";
  });

  vdo3.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-in");
    cursor.classList.add("cursor");
    cursor.innerHTML = " ";
  });

  pic3.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-in");
    cursor.classList.remove("cursor");
    cursor.innerHTML = "<p>sound on</p>";
  });

  pic3.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-in");
    cursor.classList.add("cursor");
    cursor.innerHTML = " ";
  });
}
cAnimation();

// LocomotiveScroll
function init() {
  // locomotive
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    lerp: 0.03,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

// timeline 1
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top 35%",
    stop: "top 0%)",
    scrub: 3,
  },
});

// page1 Animation
function p1anim() {
  tl.to(
    "#text1",
    {
      x: -80,
      duration: 1,
    },
    "anime"
  );

  tl.to(
    "#text2",
    {
      x: 80,
      duration: 1,
    },
    "anime"
  );

  tl.to(
    "video",
    {
      width: "90%",
    },
    "anime"
  );
}
p1anim();

// timeline2
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top -125%",
    stop: "top -130%)",
    scrub: 2,
  },
});

// page2 Animation
tl2.to(".main", {
  backgroundColor: "white",
});

// timeline3
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top -520%",
    stop: "top -200%)",
    scrub: 1,
  },
});

// page4 Animation
tl3.to(".main", {
  backgroundColor: "black",
});

// box animation
let boxes = document.querySelectorAll(".box");
boxes.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    let att = elem.getAttribute("data-img");
    console.log(att);
    cursor.style.width = "20vw";
    cursor.style.height = "20vw";
    cursor.style.borderRadius = 0;
    cursor.style.backgroundImage = `url(${att})`;
  });

  elem.addEventListener("mouseleave", () => {
    cursor.style.width = "1.5vw";
    cursor.style.height = "1.5vw";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `url(none)`;
  });
});
