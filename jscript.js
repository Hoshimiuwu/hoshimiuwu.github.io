var sound = document.createElement('audio')
sound.id = 'audio'
sound.src = 'mmm.mp3'
sound.type = 'audio/mp3'
sound.volume = 0.25
document.body.appendChild(sound)

function playAudio() {
    sound.play();
} 

let imgs = ["art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg", "art5.jpg"]
let counter = 0
let button = document.querySelector("#forwardbutton")
let imageObject = document.querySelector("#gallery")

button.addEventListener("click", forward, false)

function forward(){
if(counter < imgs.length)
    counter++

if(counter >= 5)
counter = 0
console.log("cock")

imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}