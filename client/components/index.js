const swamiSounds = [
  '../server/audio/back-back-back.mp3',
  '../server/audio/berman-whoop.mp3',
  '../server/audio/he-could-go-all-the-way.mp3',
  '../server/audio/hello.mp3'
];

let sound;

function generateRandomIndex() {
  return Math.floor((Math.random() * 4) + 1);
}

function playSound() {

  const randomIndex = generateRandomIndex(swamiSounds.length - 1);
  if (sound) {
    sound.pause();
  } else {
    sound = new Audio();
  }

  if (randomIndex === 1) {
    sound.src = swamiSounds[0];
  } else if (randomIndex === 2) {
    sound.src = swamiSounds[1];
  } else if (randomIndex === 3) {
    sound.src = swamiSounds[2];
  } else if (randomIndex === 4) {
    sound.src = swamiSounds[3];
  }
  sound.play()
    .catch(error => {
      // eslint-disable-next-line no-console
      console.log(error);
    });
}

const swamiTitle = document.querySelector('.swami-title');
const swamiTitle2 = document.querySelector('.swami-title-2');

swamiTitle.addEventListener('click', playSound);
swamiTitle2.addEventListener('click', playSound);

swamiTitle.addEventListener('click', () => {
  swamiTitle.classList.toggle('is-flipped');
});

swamiTitle2.addEventListener('click', () => {
  swamiTitle2.classList.toggle('is-flipped');
});
