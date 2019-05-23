export class Song {
    private title!:string;       //Name of the song
    private artist!:string;      //Name of the artist
    private path!:string;        //Path of the audio file

    constructor(title:string, artist:string, path:string){
        this.title = title
        this.artist = artist
        this.path = path
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
}