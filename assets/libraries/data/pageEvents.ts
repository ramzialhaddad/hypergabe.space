import {Song} from '../radio/Csong'
export type PageData = {icon:string, messages:string[], playlist:Song[]}

let defaultPage:PageData;
let birthdayPage:PageData;
let christmasPage:PageData;
let halloweenPage:PageData;     // TO BE ADDED SOON

//############
//DEFAULT PAGE
//############

    defaultPage = {
        icon: "assets/images/gabeDefault.png",
        messages: [
        "People like you belong in the trash.",
        "I don't feel like doing anything today.",
        "You wanna play fortnite with me?",
        "Why is a loser like you on here?",
        "Please don't speak to me... or look at me.",
        "If you like Satania then you must be a real idiot.",
        "How do I convert skrillex.mp3 into html??",
        "Hey I heard that HyperGabe is a pretty cool name",
        "Please do us both a favour and get as far from me as possible",
        "I don't remember asking you to be here.",
        "I'm waiting for .meme to become available",
        "owo what's this?? *nuzzles you*",
        "Only losers refresh the page",
        "Go to http://midori.xyz for free unlimited v-bucks",
        "mom said it's my turn to go on the xbox"
        ],
        playlist: [
            new Song("Modus Operandi","18 Carat Affair","../../songs/default/18 Carat Affair - Modus Operandi.mp3"),
            new Song("Peace and Tranquility","A Hat in Time","../../songs/default/A Hat in Time - Peace and Tranquility.mp3"),
            new Song("The Future Is Now","A Z U R E","../../songs/default/A Z U R E - The Future Is Now.mp3"),
            new Song("Remember Summer Days","Anri","../../songs/default/Anri - Remember Summer Days.mp3"),
            new Song("cyber imagination","bbrainz","../../songs/default/bbrainz - cyber imagination.mp3"),
            new Song("Surgeon Stimulator (Heart Transplant)","Black Heron","../../songs/default/Black Heron – Surgeon Stimulator (Heart Transplant).mp3"),
            new Song("Just in Time","Corp","../../songs/default/Corp - Just in Time.mp3"),
            new Song("Breeze Bay","hello meteor","../../songs/default/hello meteor - Breeze Bay.mp3"),
            new Song("Resonance","HOME","../../songs/default/HOME - Resonance.mp3"),
            new Song("Dusk","Jasper De Ceuster","../../songs/default/Jasper De Ceuster - Dusk.mp3"),
            new Song("Telephone Number","Junko Ohashi","../../songs/default/Junko Ohashi - Telephone Number.mp3"),
            new Song("Hit The Spot","Surfing","../../songs/default/Surfing - Hit The Spot.mp3"),
            new Song("MIDNIGHT","THOUGHTS","../../songs/default/THOUGHTS - MIDNIGHT.mp3"),
            new Song("V o i d","Zane Alexander","../../songs/default/Zane Alexander - V o i d.mp3"),
            new Song("葛城 ミサトYEBISU (YUNG BAE EDIT)","マクロスMACROSS 82-99","../../songs/default/マクロスMACROSS 82-99 - 葛城 ミサトYEBISU (YUNG BAE EDIT).mp3"),
        ]
    }
    export {defaultPage}

//############
//END OF DATA
//############