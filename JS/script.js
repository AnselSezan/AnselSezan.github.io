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

  typewriter.typeString('Al inicio de este proyecto no tenía planeado escribir esta carta, pero mientras pasaban los días y continuaba trabajando en esto decidí hacerlo. Es posible que algún que otro <strong><i>Puerquito</i></strong> se identifique con estás palabras. <br><br>')
  .pauseFor(3000)
  .deleteAll(1)
  .typeString('”Querida Seina... En un inicio para mi tú sólo eras igual a una flor en un campo lleno de flores, tal vez no eras la flor que estaba justo en medio de todas y tal vez estabas un poco marchita. <br><br>')

  .typeString('Pero no sé desde cuándo, ni cómo fue que quede cautivado por tu belleza, lo único de lo que estoy realmente seguro, es que desde ese momento el tiempo se detuvo y ahora eres la única flor que puedo ver en ese campo. Y es que de verdad me he dado cuenta de que tienes la habilidad de convertir los días en años con tu ausencia. <br><br>')

 .typeString('A veces desearía ser un recuerdo constante que aparece al cerrar los ojos. Una luz que alegré tus días. Un sentimiento de incomodidad con mi ausencia y a la vez la felicidad que se refleje en tus ojos. Un pilar que motive a que te sigas esforzando o simplemente ser quién esté ahí para ayudar a levantarte cuando te hayas tropezado. <br><br>')

  .typeString('En resumen... Ser igual o al menos la mitad de lo que tú eres para mí.” <br><br>')

  .typeString('De verdad, te doy las gracias por ser mi inspiración durante este todo tiempo, por ser mi <i>musa</i>, y por darle un significado a todo esto. Pero sobre todas las cosas...<br><br>')

  .typeString('Te doy las gracias por ser <strong><u><i>parte de mi mundo.</i></u></strong><br><br>')

  .typeString('<strong>— Los puerquitos y Ansel.</strong>')

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
