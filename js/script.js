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
