const audio = document.getElementById('audio')
const title = document.getElementById('Title')
const cover = document.getElementById('cover')
const playbtn = document.getElementById('play')
const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const musicCon = document.getElementById('controls')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progressCon')


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


function onElementFocused(e)
{
    if (e && e.target)
        document.activeElement = e.target == document ? null : e.target;
} 

if (document.addEventListener) 
    document.addEventListener("focus", onElementFocused, true);