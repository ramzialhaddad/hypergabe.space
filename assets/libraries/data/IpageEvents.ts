import {Song} from '../radio/Csong'
export interface PageData{
    icon:string        //Path to Gabe.png
    messages:string[]  //Array of messages to say
    playlist:Song[]    //Array of songs
}