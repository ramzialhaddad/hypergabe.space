define(["require", "exports", "./random", "./radio/Cradioplayer", "./CPage", "./data/pageEvents"], function (require, exports, random_1, Cradioplayer_1, CPage_1, pageEvents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var d = new Date();
    var month = d.getMonth();
    var day = d.getDate();
    var radio = new Cradioplayer_1.RadioPlayer();
    var page = new CPage_1.pageEvents(pageEvents_1.defaultPage);
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
    var random = random_1.randomnumber(songlist.length);
    var cursong = songlist[random];
    songname.innerHTML = cursong.GetTitle() + " - " + cursong.GetArtist();
});
