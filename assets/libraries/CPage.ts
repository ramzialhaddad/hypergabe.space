import {Song} from "./radio/Csong"
import {PageData} from './data/pageEvents'
export class pageEvents {

    private pageData!:PageData;

    constructor(pageData:PageData){
        this.pageData = pageData;
    }

    GetIcon(){
        return this.pageData.icon;
    }

    GetMessages(){
        return this.pageData.messages;
    }

    GetPlaylist(){
        return this.pageData.playlist;
    }

}