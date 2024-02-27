var sound = document.createElement('audio')
sound.id = 'audio'
sound.src = 'mmm.mp3'
sound.type = 'audio/mp3'
sound.volume = 0.25
document.body.appendChild(sound)

function playAudio() {
    sound.play();
} 

/*document.removeEventListener("click", playAudio)*/
/*document.addEventListener("click", playAudio)*/