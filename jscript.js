onlineCheck()

let artCategories = {
    1: ["GenshinRender1.jpg", "GenshinRender2.jpg",],
    2: ["art6.jpg", "art7.jpg", "art1.jpg", "art2.jpg", "art3.jpg"],
    3: ["art4.jpg", "art5.jpg"]
}
let activeCategory = 1
let imgs = artCategories[activeCategory]
let counter = 0
let fowardbutton = document.querySelector("#forwardbutton")
let backwardbutton = document.querySelector("#backwardbutton")
let imageObject = document.querySelector("#gallery")

if (imageObject && imgs.length > 0) {
    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

fowardbutton.addEventListener("click", forward, false)
backwardbutton.addEventListener("click", backwards, false)

function selectArtCategory(category) {
    if (!artCategories[category]) return

    soundLibrary['bongo'].volume(0.3)
    flip('bongo')
    activeCategory = category
    imgs = artCategories[category]
    counter = 0

    if (imageObject && imgs.length > 0) {
        imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
    }

    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.id === `category-tab-${category}`)
    })
}

var soundLibrary = {
            'bongo': createSound('bongo.wav'),
            'title': createSound('title.wav'),
            'hover': createSound('hover.wav'),
            'mmm': createSound('mmm.mp3'),
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
    soundLibrary['hover'].volume(0.025)
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
    if (imgs.length === 0) return

    counter++
    if (counter >= imgs.length) {
        counter = 0
    }
    imageObject.style.backgroundImage = "url(" + imgs[counter] + ")"
}

function backwards(){
    if (imgs.length === 0) return

    counter--
    if (counter < 0) {
        counter = imgs.length - 1
    }
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

var hoverArea = document.getElementById('hoverElement');
var audio = document.getElementById('audio');
audio.volume = 0.1;
hoverArea.onmouseover= function(){
    audio.play();
}
hoverArea.onmouseout= function(){
    audio.pause();
}    

async function reveal() {
    startButton.remove()
    backdrop.remove()
}
