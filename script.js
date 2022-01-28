window.addEventListener('keydown',function(e){
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  
  
  if(!audio) return;
  else
  {
  audio.currentTime = 0;
  audio.play();
  key.classList.add('play');
  }
  window.setTimeout( function() {
    key.classList.remove('play');
  }, 700)
})