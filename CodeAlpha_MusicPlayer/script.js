const songs = [
    {
        title: "soft song",
        artist: "Amisha",
        src: "song1.mp3"
    },
    {
        title: "funky music",
        artist: "Aabha",
        src: "song2.mp3"
    },
    {
        title: "Every breath you take",
        artist: "The Police",
        src: "song3.mp3"
    }
];

let index = 0;
const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current");
const durationEl = document.getElementById("duration");

loadSong(index);

function loadSong(i) {
    title.textContent = songs[i].title;
    artist.textContent = songs[i].artist;
    audio.src = songs[i].src;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    loadSong(index);
    audio.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    loadSong(index);
    audio.play();
}

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;

    let curMin = Math.floor(audio.currentTime / 60);
    let curSec = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${curMin}:${curSec < 10 ? "0" : ""}${curSec}`;

    let durMin = Math.floor(audio.duration / 60);
    let durSec = Math.floor(audio.duration % 60);
    durationEl.textContent = `${durMin}:${durSec < 10 ? "0" : ""}${durSec}`;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
});

function setVolume(value) {
    audio.volume = value;
}

// Autoplay next song
audio.addEventListener("ended", nextSong);
