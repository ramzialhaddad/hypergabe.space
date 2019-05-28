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

let previousbutton = document.getElementById("previous") as HTMLInputElement;
previousbutton.onclick = function(){
    let curtime = CurrentSong.GetAudio().currentTime;
    if(curtime > 5){
        CurrentSong.GetAudio().currentTime = 0;
    }else{
        CurrentSong.GetAudio().pause();
        CurrentSong.GetAudio().currentTime = 0
        radio.PreviousSong();
        Update();
    }
}

let nextbutton = document.getElementById("next") as HTMLInputElement;
nextbutton.onclick = function(){
    CurrentSong.GetAudio().pause();
    CurrentSong.GetAudio().currentTime = 0
    radio.NextSong();
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
    radio.SetPlaylist(page.GetPlaylist());
    let random = randomnumber(radio.GetPlaylist().length);
    radio.SetCurSong(random);
    CurrentSong = radio.GetCurSong();

    CurrentSong.GetAudio().addEventListener("timeupdate", function(){
        if(!CurrentSong.GetAudio().ended){
            radio.SetProgressBar(CurrentSong.GetAudio().currentTime, CurrentSong.GetAudio().duration)
        }else{
            CurrentSong.GetAudio().pause();
            CurrentSong.GetAudio().currentTime = 0
            radio.NextSong();
            Update();
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

function Update(){
    CurrentSong = radio.GetCurSong();
    songname.innerHTML = CurrentSong.GetTitle() + " - " + CurrentSong.GetArtist()

    CurrentSong.GetAudio().addEventListener("timeupdate", function(){
        if(!CurrentSong.GetAudio().ended){
            radio.SetProgressBar(CurrentSong.GetAudio().currentTime, CurrentSong.GetAudio().duration)
        }else{
            CurrentSong.GetAudio().pause();
            CurrentSong.GetAudio().currentTime = 0
            radio.NextSong();
            Update();
        }
    })

    if(radio.GetState() == 1){
        CurrentSong.PlayAudio();
    }
}