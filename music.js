const audio = document.querySelector('audio');
const playButton = document.querySelector('#play-button');
const i = playButton.querySelector('i');

function playMusic() {
  if (audio.paused) {
    audio.play();
    i.className = 'fa fa-pause fa-2x';
  } else {
    audio.pause();
    i.className = 'fa fa-play fa-2x';
  }
}

playButton.addEventListener('click', playMusic);
