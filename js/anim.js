// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "I found a love for me", time: 2 },
  { text: "Darling, just dive right in", time: 8 },
  { text: "Follow my lead", time: 12 },
  { text: "Well, I found a girl", time: 17 },
  { text: "Beautiful and sweet", time: 19 },
  { text: "Well, I never knew you", time: 22 },
  { text: "were the someone", time: 24 },
  { text: "waiting for me", time: 31 },
  { text: "Cause we were just", time: 32 },
  { text: "kids when we fell in love", time: 34 },
  { text: "Not knowing what it was", time: 37 },
  { text: "It will not give you up this time", time: 40 },
  { text: "But darling, just kiss me slow", time: 48 },
  { text: "Your heart is all I own", time: 51 },
  { text: "And in your eyes you're holding mine", time: 55 },
  { text: "Baby, I'm dancing in the dark", time: 63 },
  { text: "With you between my arms", time: 69 },
  { text: "Barefoot on the grass", time: 73 },
  { text: "Listening to our favourite song", time: 77 },
  { text: "When you said you looked a mess", time: 81 },
  { text: "I whispered underneath my breath", time: 84 },
  { text: "But you heard it", time: 88 },
  { text: "Darling, you look perfect tonight", time: 90 },
  { text: "Well, I found a woman", time: 102 },
  { text: "Stronger than anyone I know", time: 104 },
  { text: "She shares my dreams, I", time: 108 },
  { text: "hope that someday, I'll", time: 111 },
  { text: "share her home", time: 112 },
  { text: "I found a love", time: 116 },
  { text: "To carry more than just my secrets", time: 121 },
  { text: "To carry love, to carry children of our own", time: 125 },
  { text: "We are still kids, but we're son in love", time: 130 },
  { text: "Fighting against all odds", time: 135 },
  { text: "I know we'll be alright this time", time: 139 },
  { text: "Darling, just hold my hand", time: 146 },
  { text: "Be my girl, I'll be your man", time: 151 },
  { text: "I see my future in your eyes", time: 154 },
  { text: "Baby, I'm dancing in the dark", time: 162 },
  { text: "With you between my arms", time: 170 },
  { text: "Barefoot on the grass", time: 173 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 9s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 9000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);