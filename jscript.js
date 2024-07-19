var sound = document.createElement('audio')
sound.id = 'audio'
sound.src = 'mmm.mp3'
sound.type = 'audio/mp3'
sound.volume = 0.25
document.body.appendChild(sound)
onlineCheck()
function playAudio() {
    sound.play();
} 

let imgs = ["art6.jpg", "art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg", "art5.jpg"]
let counter = 0
let fowardbutton = document.querySelector("#forwardbutton")
let backwardbutton = document.querySelector("#backwardbutton")
let imageObject = document.querySelector("#gallery")

fowardbutton.addEventListener("click", forward, false)
backwardbutton.addEventListener("click", backwards, false)

function forward(){
    if(counter < imgs.length)
    counter++

    if(counter >= 6)
    counter = 0

    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

function backwards(){
    if(counter < imgs.length)
    counter--

    if(counter < 0)
    counter = 5

    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

number = 0;
var animations = ['star.gif'];

function character() {

    image = document.getElementById('hiddenimageid');
    image.src = animations[number];


imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

async function onlineCheck(){
    let response
    await fetch("https://hoshi.veljkokovacevic.com/hoshcheck").then(res => res.json()).then(json => response = JSON.stringify(json));
    response = parseInt(response)
    console.log(response)

    let difference = (Date.now() / 1000) - response
    console.log(difference)
    let threshold = 150; //5m threshold for online
    let online = false;
    if(difference > threshold) online = false;
    else online = true;
    let mult = 0;
    let magnitude = 's';

    if(difference > 60) {
        magnitude = 'm'; mult = 1;
        if(difference > 3600) {
            magnitude = 'h'; mult = 2;
            if(difference > 216000) {
                magnitude = 'd'; mult = 3;
            }
        }
    }

    difference = parseInt(difference);

    if(online) {
        lastPing.innerHTML = "Last Seen - Now";
        statusBadge.className = "online";
        statusBadge.innerHTML = "Online ¤";
    } else {
        lastPing.innerHTML = "Last Seen - " + (difference / 60**mult).toFixed(1) + magnitude + " ago";
        statusBadge.className = "offline";
        statusBadge.innerHTML = "Offline ¤";
    }
}
