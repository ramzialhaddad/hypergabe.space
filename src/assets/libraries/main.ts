import {randomnumber} from './random'
import {Song} from './radio/Csong'
import {RadioPlayer} from './radio/Cradioplayer'
import {pageEvents} from './CPage'

//Pages
import {defaultPage} from './data/pageEvents'

let d       =   new Date();
let month   =   d.getMonth();
let day     =   d.getDate();

let radio   =   new RadioPlayer();
let page:pageEvents;
let CurrentSong:Song;

let progressbar = radio.GetWidth();
//Testing data

//

let playbutton = document.getElementById("playpause") as HTMLInputElement;
playbutton.onclick = function(){
    let state = radio.GetState();
    switch(state){
        case 0:{    //Loading
            radio.SetState(1);
            CurrentSong.PlayAudio();
            break;
        }
        case 1:{    //Playing
            radio.SetState(2);
            CurrentSong.PauseAudio();
            break;
        }
        case 2:{    //Paused
            radio.SetState(1);
            CurrentSong.PlayAudio();
            break;
        }
    }
}

let songname = document.getElementById("radio-song-name") as HTMLInputElement;

if(month == 4 && day == 20){
    console.log("Happy Birthday!!!")	
}else if (month == 11 && day < 27){
	console.log("Merry Christmas!!!");	
} else {
    page = new pageEvents(defaultPage);
    load();
}

function load(){
    //Init RadioPlayer
    let random = randomnumber(page.GetPlaylist().length);
    CurrentSong = page.GetPlaylist()[random];

    CurrentSong.GetAudio().addEventListener("timeupdate", function(){
        if(!CurrentSong.GetAudio().ended){
            radio.SetProgressBar(CurrentSong.GetAudio().currentTime, CurrentSong.GetAudio().duration)
        }else{
            CurrentSong.PauseAudio();
            radio.SetState(2);
            console.log("Song has ended");
        }
    })
    songname.innerHTML = CurrentSong.GetTitle() + " - " + CurrentSong.GetArtist()
    //=================
    
    let image = document.getElementById('gabechan') as HTMLImageElement
    image.src = page.GetIcon();

    let randomText = document.getElementById('randomtext') as HTMLDivElement;
    random = randomnumber(page.GetMessages().length);
    
    randomText.innerHTML = page.GetMessages()[random];
}
