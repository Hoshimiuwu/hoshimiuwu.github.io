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

async function onlineCheck(){
    let response
    await fetch("http://116.203.200.86:7950/hoshcheck").then(res => res.json()).then(json => response = JSON.stringify(json));
    response = parseInt(response)
    console.log(response)

    let difference = (Date.now() / 1000) - response
    console.log(difference)
    let threshold = 900; //15m threshold for online
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
        statusBadge.className = "online";
        statusBadge.innerHTML = "Online ¤";
    } else {
        statusBadge.className = "offline";
        statusBadge.innerHTML = "Offline ¤";
    }

    lastPing.innerHTML = "Last Seen - " + (difference / 60**mult).toFixed(1) + magnitude + " ago";
}