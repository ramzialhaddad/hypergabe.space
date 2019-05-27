import {Song} from "./Csong"
export class RadioPlayer{
    private state!:number; // 0 = Ready     1 = Playing     2 = Paused 
    //private currentsong!:Song;
    private playlist!:Song[];
    private index!:number;
    private bar!:number;
    private progress!:HTMLSpanElement;

    constructor(){
        this.state = 0;
        this.index = 0;
        let backbar = document.getElementById('radio-progress') as HTMLSpanElement
        this.bar = backbar.clientWidth;
        this.progress = document.getElementById('radio-progress-bar') as HTMLSpanElement
    }

    GetState(){
        return this.state;
    }   
    GetCurSong(){
        return this.playlist[this.index];
    }
    GetWidth(){
        return this.bar;
    }
    GetPlaylist(){
        return this.playlist;
    }

    SetState(state:number){
        this.state = state;
    }
    SetCurSong(index:number){
        this.index = index;
    }
    SetProgressBar(curtime:number, maxtime:number){
        this.progress.style.width = (curtime*this.bar/maxtime).toString() + "px";
    }
    SetPlaylist(songs:Song[]){
        this.playlist = songs;
    }

    PreviousSong(){
        let lenght = this.playlist.length
        if(this.index == 0){
            this.index = lenght - 1
        }else{
            this.index = this.index - 1
        }
        
    }
    NextSong(){
        let lenght = this.playlist.length
        if(this.index == lenght - 1){
            this.index = 0
        }else{
            this.index = this.index + 1
        }
    }

}