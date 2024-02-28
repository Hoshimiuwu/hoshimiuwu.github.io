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
let fowardbutton = document.querySelector("#forwardbutton")
let backwardbutton = document.querySelector("#backwardbutton")
let imageObject = document.querySelector("#gallery")

fowardbutton.addEventListener("click", forward, false)
backwardbutton.addEventListener("click", backwards, false)

function forward(){
    if(counter < imgs.length)
    counter++

    if(counter >= 5)
    counter = 0

    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

function backwards(){
    if(counter < imgs.length)
    counter--

    if(counter <= 0)
    counter = 4

    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}