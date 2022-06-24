// AOS animation
AOS.init({
  duration: 1000,
  easing: "ease",
});

// Music
var sound = new Howl({
  src: ["Brightest_light_in_the_night.mp3"],
  loop: true,
  volume: 0.7,
});
var sound2 = new Howl({
  src: ["Nunca_Es_Suficiente.mp3"],
  loop: true,
  volume: 1,
});

sound.play();

// Modal
const btn = document.getElementById("btn");
const btn_modal_letter = document.getElementById("btn_modal_letter");
var flag = true;

// Action_Boton
btn.addEventListener("click", function () {
  sound.stop();
  sound2.play();
  modal_letter.classList.add("modal_letter--show");
  btn.classList.add("btn--none");

  // document.getElementById("title_letter").innerText +='Querida Seina.';

  //TypeWriter
  var letter = document.getElementById("letter");

  var typewriter = new Typewriter(letter, {
    delay: 1,
  });

  typewriter.typeString('Al inicio de este proyecto no tenia planeado escribir esta carta, pero mientras pasaban los días y continuaba trabajando en esto, surgieron sentimientos en mí que no puedo explicar.<br><br>')

  .typeString('Así que tome la decisión de convertirlos en palabras y así lograr aligerar la carga... Sí, supongo que soy ese tipo de persona.<br><br>')


  .typeString('Como no conseguí la confianza suficiente ya que me sentía egoísta escribiendo esto, así que decidí redactar esto pensando en como me siento y como posiblemente se sienten algunos de tus demás “puerquitos” respecto a ti.<br><br>')
  .pauseFor(2000)
  .typeString('Esta es posiblemente la carta más difícil que tendré que escribir en mi vida.<br><br>')
  .pauseFor(2000)

  .typeString('Usualmente acostumbro a escribir historias de ficción, pero por primera vez, tendré que escribir sólo con la verdad.<br><br>')
  
  .pauseFor(10000)
  .deleteAll(1)
  .typeString('Querida Seina... En un inicio para mi tú sólo eras igual a “una flor en un campo lleno de flores”, tal vez no eras la flor que estaba justo en medio de todas y tal vez estabas un poco marchita.<br><br>')

  .typeString('Pero no sé desde cuándo, ni cómo fue que quede cautivado por tu belleza, lo único de lo que estoy realmente seguro, es que desde ese momento el tiempo se detuvo y ahora eres la única flor que puedo ver en ese campo. Y es que de verdad me he dado cuenta de que tienes la habilidad de convertir los días en años con tu ausencia.<br><br>')

  .typeString('Estoy seguro de que tal vez para ti no soy más que la representación de un número. Y eso no es para nada malo, tan sólo es un poco extraño... ya que algunas veces siento que me molesta ser un solamente un número y desearía ser cualquier otra cosa en lugar de eso, como por ejemplo...<br><br>')

  .typeString('A veces desearía ser un recuerdo constante que aparece al cerrar los ojos. Una luz que alegré tus días. Un sentimiento de incomodidad con mi ausencia y a la vez la felicidad que se refleje en tus ojos con mi presencia. Un pilar que motive a que te sigas esforzando o simplemente ser quién esté ahí para ayudar a levantarte cuando te hayas tropezado.<br><br>')

  .typeString('simplemente ser quién esté ahí para ayudar a levantarte cuando te hayas tropezado.<br><br>')

  .typeString('En resumen... A veces deseo ser igual o al menos la mitad de lo que tú eres para mí.<br><br>')

  .typeString('De verdad, te doy las gracias por ser mi inspiración durante este todo tiempo, por ser mi “musa”, y por darle un significado a todo esto. Pero sobre todas las cosas...<br><br>')

  .typeString('Te doy las gracias por ser <strong>parte de mi mundo.</strong><br><br>')

  .typeString('— Los puerquitos y Ansel.')
    .start();
});

// Close Modal
btn_modal_letter.addEventListener("click", function () {
  modal_letter.classList.remove("modal_letter--show");
  sound2.stop();
  sound.play();
});
// Hide Letter
btn_modal_letter.addEventListener("click", () =>
  btn.classList.remove("btn--none")
);
