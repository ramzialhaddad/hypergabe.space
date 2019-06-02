export class Song {
    private _title!: string;                 // Name of the song
    private _artist!: string;                // Name of the artist
    private _path!: string;                  // Path of the audio file
    private _sound!: HTMLAudioElement;       // Audio element for file
    private _playPause!: HTMLInputElement;   // Play/pause element

    constructor(title:string, artist:string, path:string){
        this._title = title;
        this._artist = artist;
        this._path = path;
        this._sound = new Audio(path);

        this._playPause = document.getElementById('playpause') as HTMLInputElement;
    }

    get title(): string{
        return this._title;
    }
    get artist(): string{
        return this._artist;
    }
    get path(): string{
        return this._path;
    }
    get audio(): HTMLAudioElement{
        return this._sound;
    }

    public PlayAudio(): void{
        this._sound.play();
        
        this._playPause.classList.remove("play");
        this._playPause.classList.add("pause");
    }
    PauseAudio(): void{
        this._sound.pause();
        
        this._playPause.classList.remove("pause");
        this._playPause.classList.add("play");
    }
}