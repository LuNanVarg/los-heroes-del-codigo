document.addEventListener('DOMContentLoaded', () => {
  const interactiveZone = document.querySelector('.interactive-zone');
  const quoteDisplay = document.getElementById('quoteDisplay');
  const toggleQuoteBtn = document.getElementById('toggleQuoteBtn');

  if (!interactiveZone || !quoteDisplay || !toggleQuoteBtn) return;

  const memberQuotes = {
    anahi: [
      '"Todo lo puedo en Cristo que me fortalece."',
      '"El Señor es mi pastor, nada me faltará."',
      '"Confía en el Señor con todo tu corazón."'
    ],
    ezequiel: [
      '"Solo el que vive de rodillas ve gigantes a sus enemigos."',
      '"No todo los que deambulan están perdidos."',
      '"Como será la laguna que el chancho la cruza al trote."'
    ],
    marcos: [
      '"Si funciona, no se toca."',
      '"Nunca lastimes a alguien que después no puedas matar."',
      '"Nunca regales un libro a quien no sabe leer."'
    ],
    marisol: [
      '"No te rindas, por favor no cedas, aunque el frío queme, aunque el miedo muerda…"',
      '"La mayor lección de amor, me la dio alguien que no hablaba la misma lengua que yo."',
      '"La ignorancia no es una falta de conocimiento, sino la ilusión de creer que ya se sabe todo. El sabio es aquel que permanece siempre aprendiz."'
    ],
    nancy: [
      '"Respira, respira y sigue."',
      '"No tiene que salir perfecto, tiene que salir."',
      '"Si no funciona de una manera, buscamos otra."'
    ]
  };

  const currentMember = interactiveZone.dataset.member || 'anahi';
  const quotesList = memberQuotes[currentMember] || memberQuotes.anahi;
  let lastIndex = -1;

  toggleQuoteBtn.addEventListener('click', () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotesList.length);
    } while (randomIndex === lastIndex && quotesList.length > 1);

    lastIndex = randomIndex;
    quoteDisplay.textContent = quotesList[randomIndex];
  });
});