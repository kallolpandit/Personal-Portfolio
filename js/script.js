let main_menu = document.querySelector(".main_menu");

let menu_height = main_menu.clientHeight;

window.addEventListener("scroll", function () {
  let scrolling = this.scrollY;

  if (scrolling > menu_height + 40) {
    main_menu.classList.add("menu_fixed");
  } else {
    main_menu.classList.remove("menu_fixed");
  }
});
// ===========Menu Fixed===============

let backtotop = document.querySelector(".backtotop");

window.addEventListener("scroll", () => {
  let scrolling = this.scrollY;
  if (scrolling > 300) {
    backtotop.classList.add("show");
  } else {
    backtotop.classList.remove("show");
  }
});

backtotop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
// ===========Back To Top===============

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString(" Web Designer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("Front-End Developer")
  .pauseFor(2500)
  .start();
// *============about part end============

var app = document.getElementById("free");

var typewriter = new Typewriter(free, {
  loop: true,
});

typewriter
  .typeString(" I'm available for freelance work _")
  .pauseFor(1200)
  .deleteAll()
  .start();
// * ===========freelance part end===========

// *=============Mouse Move Start==================
// set the starting position of the cursor outside of the screen
let clientX = 100;
let clientY = 100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });

    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

let lastX = 0;
let lastY = 0;
let isStuck = false;
let showCursor = false;
let group, stuckX, stuckY, fillOuterCursor;

const initCanvas = () => {
  const canvas = document.querySelector(".cursor--canvas");
  const shapeBounds = {
    width: 75,
    height: 75,
  };
  paper.setup(canvas);
  const strokeColor = "#e54b4b";
  const strokeWidth = 1;
  const segments = 8;
  const radius = 20;

  // we'll need these later for the noisy circle
  const noiseScale = 150; // speed
  const noiseRange = 4; // range of distortion
  let isNoisy = false; // state

  // the base shape for the noisy circle
  const polygon = new paper.Path.RegularPolygon(
    new paper.Point(0, 0),
    segments,
    radius
  );
  polygon.strokeColor = strokeColor;
  polygon.strokeWidth = strokeWidth;
  polygon.smooth();
  group = new paper.Group([polygon]);
  group.applyMatrix = false;

  const noiseObjects = polygon.segments.map(() => new SimplexNoise());
  let bigCoordinates = [];

  // function for linear interpolation of values
  const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
  };

  // function to map a value from one range to another range
  const map = (value, in_min, in_max, out_min, out_max) => {
    return (
      ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
  };

  // the draw loop of Paper.js
  // (60fps with requestAnimationFrame under the hood)
  paper.view.onFrame = (event) => {
    // using linear interpolation, the circle will move 0.2 (20%)
    // of the distance between its current position and the mouse
    // coordinates per Frame
    lastX = lerp(lastX, clientX, 0.2);
    lastY = lerp(lastY, clientY, 0.2);
    group.position = new paper.Point(lastX, lastY);
  };
};

initCanvas();
// *=============Mouse Move End==================

// *=============Page Loader Start==================
let preloader = document.querySelector("#preloader");
window.addEventListener("load", () => {
  preloader.style = "display: none;";
});
// *=============Page Loader End==================
