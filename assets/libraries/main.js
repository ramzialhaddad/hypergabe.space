define(["require", "exports", "./radio/Cradioplayer", "./CPage"], function (require, exports, Cradioplayer_1, CPage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var radio = new Cradioplayer_1.RadioPlayer();
    var page = new CPage_1.pageEvents();
    //Testing data
    var songlist = page.GetPlaylist();
    //
    var playbutton = document.getElementById("playpause");
    playbutton.onclick = function () {
        var state = radio.GetState();
        switch (state) {
            case 0: {
                radio.SetState(1);
                var element = document.getElementById("playpause");
                element.classList.remove("play");
                element.classList.add("pause");
                break;
            }
            case 1: {
                radio.SetState(2);
                var element = document.getElementById("playpause");
                element.classList.remove("pause");
                element.classList.add("play");
                break;
            }
            case 2: {
                radio.SetState(1);
                var element = document.getElementById("playpause");
                element.classList.remove("play");
                element.classList.add("pause");
                break;
            }
        }
    };
    var songname = document.getElementById("radio-song-name");
    songname.innerHTML = songlist[0].GetTitle() + " - " + songlist[0].GetArtist();
});
