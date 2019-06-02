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

//Testing data

//

let playbutton = document.getElementById("playpause") as HTMLInputElement;
playbutton.onclick = function(){
    let state = radio.state;
    switch(state){
        case 0:{    //Loading
            radio.state = 1;
            CurrentSong.PlayAudio();
            break;
        }
        case 1:{    //Playing
            radio.state = 2;
            CurrentSong.PauseAudio();
            break;
        }
        case 2:{    //Paused
            radio.state = 1;
            CurrentSong.PlayAudio();
            break;
        }
    }
}

let previousbutton = document.getElementById("previous") as HTMLInputElement;
previousbutton.onclick = function(){
    let curtime = CurrentSong.audio.currentTime;
    if(curtime > 5){
        CurrentSong.audio.currentTime = 0;
    }else{
        CurrentSong.audio.pause();
        CurrentSong.audio.currentTime = 0
        radio.previousSong();
        Update();
    }
}

let nextbutton = document.getElementById("next") as HTMLInputElement;
nextbutton.onclick = function(){
    CurrentSong.audio.pause();
    CurrentSong.audio.currentTime = 0
    radio.nextSong();
    Update();
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
    radio.playlist = page.playlist;

    let random = randomnumber(radio.playlist.length);
    radio.currentIndex = random;
    
    Update();
    //=================
    
    let image = document.getElementById('gabechan') as HTMLImageElement
    image.src = page.icon;

    let randomText = document.getElementById('randomtext') as HTMLDivElement;
    random = randomnumber(page.messages.length);
    
    randomText.innerHTML = page.messages[random];
}

function Update(){
    CurrentSong = radio.currentSong;
    songname.innerHTML = CurrentSong.title + " - " + CurrentSong.artist

    CurrentSong.audio.addEventListener("timeupdate", function(){
        if(!CurrentSong.audio.ended){
            radio.updateProgressBar(CurrentSong.audio.currentTime, CurrentSong.audio.duration)
        }else{
            CurrentSong.audio.pause();
            CurrentSong.audio.currentTime = 0
            radio.nextSong();
            Update();
        }
    })

    if(radio.state == 1){
        CurrentSong.PlayAudio();
    }
}