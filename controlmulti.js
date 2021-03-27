// Variable to store HTML5 audio element
let music = document.getElementById('audio_player');
 
// Additional for Track Selection
list.onclick = function(e) {
    e.preventDefault();

    var element = e.target;

    var src = document.getElementById('audioSource');
    src.src = element.getAttribute('data-value');

    music.load(); // call this to just preload the audio without playing


    //Auto play on selection and swap play/pause button 
    playAudio();
    // Since the function is already defined, we just call it again
};

// Play and Pause Button
function playAudio() {
    if (music.paused) {
        music.play();
        playButton.className = "";
        playButton.className = "pause button-color";
    } else {
        music.pause();
        playButton.className = "";
        playButton.className = "play button-color";
    }
}


// Sets the Volume
function setVolume(volume) {
    music.volume = volume;
}

// Mute Volume
function setVolumeNone() {
    if (music.volume > 0) {
        music.volume = 0;
    } else {
        music.volume = 1;
    }
}


