export class Song {
    private title!:string;          //Name of the song
    private artist!:string;         //Name of the artist
    private path!:string;           //Path of the audio file
    private sound!:HTMLAudioElement //Audio element for file

    constructor(title:string, artist:string, path:string){
        this.title = title
        this.artist = artist
        this.path = path
        this.sound = new Audio(path)
    }

    GetTitle(){
        return this.title;
    }
    GetArtist(){
        return this.artist;
    }
    GetPath(){
        return this.path;
    }
    GetAudio(){
        return this.sound;
    }

    PlayAudio(){
        this.sound.play();
        let element = document.getElementById("playpause") as HTMLInputElement;
        element.classList.remove("play");
        element.classList.add("pause");
    }
    PauseAudio(){
        this.sound.pause();
        let element = document.getElementById("playpause") as HTMLInputElement;
        element.classList.remove("pause");
        element.classList.add("play");
    }
}