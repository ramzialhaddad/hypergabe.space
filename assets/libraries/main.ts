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
let page    =   new pageEvents(defaultPage);

//Testing data
let songlist =  page.GetPlaylist();
//

let playbutton = document.getElementById("playpause") as HTMLInputElement;
playbutton.onclick = function(){
    let state = radio.GetState();
    switch(state){
        case 0:{
            radio.SetState(1);
            let element = document.getElementById("playpause") as HTMLInputElement;
            element.classList.remove("play");
            element.classList.add("pause");
            break;
        }
        case 1:{
            radio.SetState(2);
            let element = document.getElementById("playpause") as HTMLInputElement;
            element.classList.remove("pause");
            element.classList.add("play");
            break;
        }
        case 2:{
            radio.SetState(1);
            let element = document.getElementById("playpause") as HTMLInputElement;
            element.classList.remove("play");
            element.classList.add("pause");
            break;
        }
    }
}
//if(month == 4 & day == 20){
//    console.log("Happy Birthday!!!")	
//}else if (month == 11 & day < 27){
//	console.log("Merry Christmas!!!");	
//} else {

//}

let songname = document.getElementById("radio-song-name") as HTMLInputElement;
let random = randomnumber(songlist.length);
let cursong = songlist[random];
songname.innerHTML = cursong.GetTitle() + " - " + cursong.GetArtist();



