(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  // The white discs behind the glass drift a little with the pointer,
  // so the blur behind the title and buttons visibly changes.
  if (!reduceMotion && finePointer) {
    var root = document.documentElement;
    var frame = null;
    window.addEventListener("pointermove", function (e) {
      if (frame) return;
      frame = requestAnimationFrame(function () {
        frame = null;
        root.style.setProperty("--px", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        root.style.setProperty("--py", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
