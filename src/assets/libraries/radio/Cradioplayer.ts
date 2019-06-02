import {Song} from "./Csong"
export class RadioPlayer{
    private _state!:number;                 // State of the radio player [0 = Ready     1 = Playing     2 = Paused]
    private _playlist!:Song[];              // Array of the song class
    private _index!:number;                 // Current location of array, current song
    private _bar!:number;                   // The progress bar value
    private _progress!:HTMLSpanElement;     // The progress bar element

    constructor(){
        this._state = 0;
        this._index = 0;

        let backbar = document.getElementById('radio-progress') as HTMLSpanElement
        this._bar = backbar.clientWidth;

        this._progress = document.getElementById('radio-progress-bar') as HTMLSpanElement
    }

    get state(): number{
        return this._state;
    }   
    get currentSong(): Song{
        return this._playlist[this._index];
    }
    get width(): number{
        return this._bar;
    }
    get playlist(): Song[]{
        return this._playlist;
    }

    set state(state:number){
        this._state = state;
    }
    set currentIndex(index:number){
        this._index = index;
    }
    set playlist(songs:Song[]){
        this._playlist = songs;
    }

    public updateProgressBar(curtime:number, maxtime:number): void{
        this._progress.style.width = (curtime*this._bar/maxtime).toString() + "px";
    }
    public previousSong(): void{
        let lenght = this._playlist.length
        if(this._index == 0){
            this._index = lenght - 1
        }else{
            this._index = this._index - 1
        }
        
    }
    public nextSong(): void{
        let lenght = this._playlist.length
        if(this._index == lenght - 1){
            this._index = 0
        }else{
            this._index = this._index + 1
        }
    }

}