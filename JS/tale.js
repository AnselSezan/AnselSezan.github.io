document.getElementById("p_text").innerHTML =
  "<strong>¿Por qué regresaste?</strong>";

var mc = document.getElementById("mc");

var typewriter = new Typewriter(mc, {
  loop: true,
});

typewriter
  .typeString(
    '<span style="color: rgb(229, 81, 55);">Me encontraste en medio de la oscuridad.</span>'
  )
  .pauseFor(2000)
  .deleteAll()
  .typeString(
    '<span style="color: rgb(255, 193, 97);">Para mi brillas más que cualquier estrella en el cielo.</span>'
  )
  .pauseFor(2000)
  .deleteAll()
  .typeString(
    '<span style="color: rgb(244, 143, 177);">Desde que te vi por primera vez, mi vida se lleno de colores.</span>'
  )
  .pauseFor(2000)
  .deleteAll()
  .typeString(
    '<span style="color: rgb(88, 151, 239);">No quería seguir creyendo que sólo eras parte de un sueño.</span>'
  )
  .pauseFor(2000)
  .start();
