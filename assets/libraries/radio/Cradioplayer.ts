import {Song} from "./Csong"
export class RadioPlayer{
    private state!:number; // 0 = Ready     1 = Playing     2 = Paused 
    private currentsong!:Song;

    constructor(){
        this.state = 0;
        this.currentsong = new Song("NULL", "NULL", "NULL");
    }

    GetState(){
        return this.state;
    }
    
    GetCurSong(){
        return this.currentsong;
    }

    SetState(state:number){
        this.state = state;
    }

    SetCurSong(Song:Song){
        this.currentsong = Song;
    }

}