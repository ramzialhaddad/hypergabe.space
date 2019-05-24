import {Song} from "./Csong"
export class RadioPlayer{
    private state!:number; // 0 = Ready     1 = Playing     2 = Paused 
    private currentsong!:Song;
    private bar!:number;
    private progress!:HTMLSpanElement;

    constructor(){
        this.state = 0;
        let backbar = document.getElementById('radio-progress') as HTMLSpanElement
        this.bar = backbar.clientWidth;
        this.progress = document.getElementById('radio-progress-bar') as HTMLSpanElement
    }

    GetState(){
        return this.state;
    }   
    GetCurSong(){
        return this.currentsong;
    }
    GetWidth(){
        return this.bar;
    }

    SetState(state:number){
        this.state = state;
        if(state == 1){
            
        }
    }

    SetCurSong(Song:Song){
        this.currentsong = Song;
    }

    SetProgressBar(curtime:number, maxtime:number){
        this.progress.style.width = (curtime*this.bar/maxtime).toString() + "px";
    }

}