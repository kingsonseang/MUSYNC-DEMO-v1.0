const audio = document.getElementById('audio')
const title = document.getElementById('Title')
const cover = document.getElementById('cover')
const playbtn = document.getElementById('play')
const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const mutebtn = document.getElementById('mute')
const volumebtn = document.getElementById('volume')
const musicCon = document.getElementById('controls')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progressCon')
const elapsed = document.getElementById('elapsed')
const totalduration = document.getElementById('tduration')
const like = document.getElementById('like')


const songs = ['Black Catcher', '321', 'lemonade', 'crabRave']

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song){
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.png`;
}

playbtn.addEventListener("click", () => {
    const isPlaying = musicCon.classList.contains("play");

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

function playSong() {
    musicCon.classList.add("play")

    playbtn.querySelector('i.fas').classList.remove("fa-play");
    playbtn.querySelector('i.fas').classList.add("fa-pause");

    audio.play();
}

function pauseSong() {
    musicCon.classList.remove("play")

    playbtn.querySelector('i.fas').classList.remove("fa-pause");
    playbtn.querySelector('i.fas').classList.add("fa-play");

    audio.pause();
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        const isPlaying = musicCon.classList.contains("play");

        if(isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }
  })


function prevSong() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

prevbtn.addEventListener('click', prevSong)


function nextSong() {
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

nextbtn.addEventListener('click', nextSong)

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100 

    const progPrntValue = `${progressPercent}%`

    progress.style.width = progPrntValue
    
    // // current time
    // let currentMin = Math.floor(currentTime / 60);
    // let currentSec = Math.floor(currentTime % 60);
    // if(currentSec < 10) {
    //     currentSec = `0${currentSec}`
    // }

    // elapsed.innerText = `${currentMin}:${currentSec}`;

    // let totalMin = math.floor(audio.duration / 60);

    if(audio.duration){
        var curmins = Math.floor(audio.currentTime / 60);
        var cursec = Math.floor(audio.currentTime - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursec = Math.floor(audio.duration - durmins * 60);
        if(cursec < 10){
            cursec = `0${cursec}`
        }
        elapsed.innerText = `${curmins}:${cursec}`;
        totalduration.innerText = `${durmins}:${dursec}`;
    } else {
        elapsed.innerText = `0:00`;
        totalduration.innerText = `0:00`;
    }
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration
}

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)



// mute
function mute() {
    if(audio.muted){
        audio.muted = false
        volumebtn.querySelector('i.fas').classList.remove("fa-volume-mute");
        volumebtn.querySelector('i.fas').classList.add("fa-volume-off");
    } else {
        audio.muted = true;
        volumebtn.querySelector('i.fas').classList.add("fa-volume-mute");
        volumebtn.querySelector('i.fas').classList.remove("fa-volume-off");
    }
}

mutebtn.addEventListener('click', mute)

like.addEventListener('dblclick', () => {
    like.style.color = 'green';
});

like.addEventListener('click', () => {
    like.style.color = '#3A3E4B';
});

