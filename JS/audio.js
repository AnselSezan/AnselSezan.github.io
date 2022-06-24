// const music = new Audio('I_love_u_so.mp3');
// music.play();
// music.loop = true;
// music.playbackRate= 2;
var sound = new Howl({
  src: ["I_love_u_so.mp3"],
  autoplay: true,
  loop: true,
  volume: 0.5,
});

sound.play();

//   onend: function () {
//     alert('We finished with the setup!');
//   }
