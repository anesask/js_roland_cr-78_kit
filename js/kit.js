const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', playSound);
window.addEventListener('keyup', function (e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(key && key.classList.contains('playing')) key.classList.remove('playing');
  });
  

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
