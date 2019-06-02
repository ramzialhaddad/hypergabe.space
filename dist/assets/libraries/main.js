define(["require", "exports", "./random", "./radio/Cradioplayer", "./CPage", "./data/pageEvents"], function (require, exports, random_1, Cradioplayer_1, CPage_1, pageEvents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var radio = new Cradioplayer_1.RadioPlayer();
    var page;
    var CurrentSong;
    //Testing data
    //
    var playbutton = document.getElementById("playpause");
    playbutton.onclick = function () {
        var state = radio.state;
        switch (state) {
            case 0: { //Loading
                radio.state = 1;
                CurrentSong.PlayAudio();
                break;
            }
            case 1: { //Playing
                radio.state = 2;
                CurrentSong.PauseAudio();
                break;
            }
            case 2: { //Paused
                radio.state = 1;
                CurrentSong.PlayAudio();
                break;
            }
        }
    };
    var previousbutton = document.getElementById("previous");
    previousbutton.onclick = function () {
        var curtime = CurrentSong.audio.currentTime;
        if (curtime > 5) {
            CurrentSong.audio.currentTime = 0;
        }
        else {
            CurrentSong.audio.pause();
            CurrentSong.audio.currentTime = 0;
            radio.previousSong();
            Update();
        }
    };
    var nextbutton = document.getElementById("next");
    nextbutton.onclick = function () {
        CurrentSong.audio.pause();
        CurrentSong.audio.currentTime = 0;
        radio.nextSong();
        Update();
    };
    var songname = document.getElementById("radio-song-name");
    if (month == 4 && day == 20) {
        console.log("Happy Birthday!!!");
    }
    else if (month == 11 && day < 27) {
        console.log("Merry Christmas!!!");
    }
    else {
        page = new CPage_1.pageEvents(pageEvents_1.defaultPage);
        load();
    }
    function load() {
        //Init RadioPlayer
        radio.playlist = page.playlist;
        var random = random_1.randomnumber(radio.playlist.length);
        radio.currentIndex = random;
        Update();
        //=================
        var image = document.getElementById('gabechan');
        image.src = page.icon;
        var randomText = document.getElementById('randomtext');
        random = random_1.randomnumber(page.messages.length);
        randomText.innerHTML = page.messages[random];
    }
    function Update() {
        CurrentSong = radio.currentSong;
        songname.innerHTML = CurrentSong.title + " - " + CurrentSong.artist;
        CurrentSong.audio.addEventListener("timeupdate", function () {
            if (!CurrentSong.audio.ended) {
                radio.updateProgressBar(CurrentSong.audio.currentTime, CurrentSong.audio.duration);
            }
            else {
                CurrentSong.audio.pause();
                CurrentSong.audio.currentTime = 0;
                radio.nextSong();
                Update();
            }
        });
        if (radio.state == 1) {
            CurrentSong.PlayAudio();
        }
    }
});
