const audio = document.querySelector('audio');
const playButton = document.getElementById('play-button');
const icon = playButton.querySelector('i');

function playMusic() {
  if (audio.paused) {
    audio.play();
    icon.className = 'fa fa-pause fa-2x';
  } else {
    audio.pause();
    icon.className = 'fa fa-play fa-2x';
  }
}

playButton.addEventListener('click', playMusic);
