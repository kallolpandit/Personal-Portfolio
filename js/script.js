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

var app = document.getElementById("free");

var typewriter = new Typewriter(free, {
  loop: true,
});

typewriter
  .typeString(" I'm available for freelance work _")
  .pauseFor(1200)
  .deleteAll()
  .start();
