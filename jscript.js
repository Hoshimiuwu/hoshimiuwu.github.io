onlineCheck()

let imgs = ["art6.jpg", "art7.jpg", "art1.jpg", "art2.jpg", "art3.jpg", "art4.jpg", "art5.jpg"]
let counter = 0
let fowardbutton = document.querySelector("#forwardbutton")
let backwardbutton = document.querySelector("#backwardbutton")
let imageObject = document.querySelector("#gallery")

fowardbutton.addEventListener("click", forward, false)
backwardbutton.addEventListener("click", backwards, false)

var soundLibrary = {
            'bongo': createSound('bongo.wav'),
            'title': createSound('title.wav'),
            'hover': createSound('hover.wav'),
        }

async function flip(name){
            soundLibrary[name].play();
        }

        function createSound(file, extras){
            let howlBase = {
                src:['aud/'+file]
            }
            
            return new Howl(Object.assign({}, howlBase, extras))
        }

function hoverSound(){
    soundLibrary['hover'].volume(0.03)
    flip('hover')
}
  
function titleSound(){
    soundLibrary['title'].volume(0.05)
    flip('title')
}

function bongoSound(){
    soundLibrary['bongo'].volume(0.2)
    flip('bongo')
}

function forward(){
    if(counter < imgs.length)
    counter++

    if(counter >= 7)
    counter = 0

    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

function backwards(){
    if(counter < imgs.length)
    counter--

    if(counter < 0)
    counter = 6

    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

async function onlineCheck(){
    let response
    await fetch("https://hoshi.veljkokovacevic.com/hoshcheck").then(res => res.json()).then(json => response = JSON.stringify(json));
    response = parseInt(response)
    console.log(response)

    let difference = (Date.now() / 1000) - response
    console.log(difference)
    let threshold = 150; 
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

async function reveal() {
    startButton.remove()
    backdrop.remove()
}
