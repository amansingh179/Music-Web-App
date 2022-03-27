console.log("Welcome to my Music app");
let container = document.querySelector(".container");
let play = document.getElementById("play");
let goBack = document.getElementById("goBack");
let next = document.getElementById("next");

let audio = document.getElementById("audio");
let songChangerContainer = document.getElementById("songChangerContainerid");
let songChanger = document.querySelector(".songChanger");
let SongTitle = document.querySelector(".SongTitle");
let audioCover = document.getElementById("audio-cover");

// Declaring songs array here
const songs = ['347Aidan_Memories', 'Excuses', 'Juice_World_Lucid_Dreams', 'Raataan Lambiyan - Shershaah', 'Sunflower'];

// Declaring songs index here
let songIndex = 4;

// Loading songs here
loadSong(songs[songIndex]);

// Update song ,img ,title here
function loadSong(song) {
    SongTitle.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    audioCover.src = `img/${song}.jpg`;
}

// for playing song
function playSong() {
    container.classList.add('play');
    play.querySelector('i.fa-solid').classList.remove('fa-play');
    play.querySelector('i.fa-solid').classList.add('fa-pause');
    audio.play();
}
// for pausing song
function pauseSong() {
    container.classList.remove('play');
    play.querySelector('i.fa-solid').classList.add('fa-play');
    play.querySelector('i.fa-solid').classList.remove('fa-pause');

    audio.pause();
}

// Previous Song function
function previousSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex])
    playSong()
}

//writing a function for next song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// updating line here pf music bar
function updateLine(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    songChanger.style.width = `${progressPercent}%`
}

// Set Song
function setSong(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
play.addEventListener('click', () => {
    const isPlaying = container.classList.contains('play')

    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
})

// Changing song tracks
goBack.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);

// Declearing function for SOng bars
audio.addEventListener('timeupdate', updateLine);

// Set Music 
songChangerContainer.addEventListener('click', setSong);

//Song ends
audio.addEventListener('ended', nextSong);