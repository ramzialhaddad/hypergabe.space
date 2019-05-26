define(["require", "exports", "./random", "./radio/Cradioplayer", "./CPage", "./data/pageEvents"], function (require, exports, random_1, Cradioplayer_1, CPage_1, pageEvents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var radio = new Cradioplayer_1.RadioPlayer();
    var page;
    var CurrentSong;
    var progressbar = radio.GetWidth();
    //Testing data
    //
    var playbutton = document.getElementById("playpause");
    playbutton.onclick = function () {
        var state = radio.GetState();
        switch (state) {
            case 0: { //Loading
                radio.SetState(1);
                CurrentSong.PlayAudio();
                break;
            }
            case 1: { //Playing
                radio.SetState(2);
                CurrentSong.PauseAudio();
                break;
            }
            case 2: { //Paused
                radio.SetState(1);
                CurrentSong.PlayAudio();
                break;
            }
        }
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
        var random = random_1.randomnumber(page.GetPlaylist().length);
        CurrentSong = page.GetPlaylist()[random];
        CurrentSong.GetAudio().addEventListener("timeupdate", function () {
            if (!CurrentSong.GetAudio().ended) {
                radio.SetProgressBar(CurrentSong.GetAudio().currentTime, CurrentSong.GetAudio().duration);
            }
            else {
                CurrentSong.PauseAudio();
                radio.SetState(2);
                console.log("Song has ended");
            }
        });
        songname.innerHTML = CurrentSong.GetTitle() + " - " + CurrentSong.GetArtist();
        //=================
        var image = document.getElementById('gabechan');
        image.src = page.GetIcon();
    }
});
