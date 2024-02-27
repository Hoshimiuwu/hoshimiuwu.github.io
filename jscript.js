var sound = document.createElement('audio')
sound.id = 'audio'
sound.src = 'mmm.mp3'
sound.type = 'audio/mp3'
document.body.appendChild(sound)

function playAudio() {
    document.getElementById('audio').play();
    document.removeEventListener("focus", playAudio)
} 

document.addEventListener("focus", playAudio)