import {Song} from "./radio/Csong"
import {PageData} from './data/pageEvents'
export class pageEvents {

    private _pageData!:PageData;

    constructor(pageData:PageData){
        this._pageData = pageData;
    }

    get icon(){
        return this._pageData.icon;
    }
    get messages(){
        return this._pageData.messages;
    }
    get playlist(){
        return this._pageData.playlist;
    }

}