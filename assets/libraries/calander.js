// h-hewwo there 'w'
var d = new Date();
var month = d.getMonth();
var day = d.getDay();

var thingstosay = [
	'People like you belong in the trash.',
	'I don\'t feel like doing anything today.',
	'You wanna play fortnite with me?',
	'Why is a loser like you on here?',
	'Please don\'t speak to me... or look at me.',
	'If you like Satania then you must be a real idiot.',
	'How do I convert skrillex.mp3 into html??',
	'Hey I heard that HyperGabe is a pretty cool name',
	'Please do us both a favour and get as far from me as possible',
	'I don\'t remember asking you to be here.',
	'I\'m waiting for .meme to become available',
	'owo what\'s this?? *nuzzles you*',
	'Only losers refresh the page',
	'Go to http://kakkoi.cafe for the bootleg version of this site',
	'mom said it\'s my turn to go on the xbox'
];

if (month == 11 & day < 27){
    console.log("Merry Christmas!!!")

    document.getElementById("gabechan").src="assets/images/gabe2.png";

    var Head = document.getElementsByTagName('HEAD').item(0);
    var Script= document.createElement("script");
    Script.type = "text/javascript";
    Script.src="assets/libraries/snowstorm.js";
    Head.appendChild( Script);

    var god = 0;

    //CHRISTMAS SONG!!!
    var songstoplay = [
	    'Bart Graft - Yuletide \'88',
	    'bungalow - christmas time is here',
	    'CUSAX - CUSAXMAS',
	    'DANCE WITH THE DEAD - Carol of Bells',
	    'Holy Ghost! & Classixx - Merry Christmas Mr. Lawrence',
	    'iamMANOLIS - Xmas in Rio',
	    'NETVERK - LastクリスマスXMAS',
	    'Phaserland - What Does Christmas Mean To You',
	    'Street Cleaner - Flying Home For Christmas',
	    'Wham! - Last Christmas (Vaporwave Remix)'
    ];

    var randomMessage = Math.floor(Math.random() * thingstosay.length);
    var randomSong = Math.floor(Math.random() * songstoplay.length);
    
    document.getElementById('iframeAudio').src = "assets/songs/christmas/" + songstoplay[randomSong] + ".mp3";
    document.getElementById('SongName').innerHTML = "Song: " + songstoplay[randomSong];
    
    document.getElementById('randomtext').innerHTML = thingstosay[randomMessage];

}else{
    document.getElementById("gabechan").src="assets/images/gabe1.png";

    //Music
    var songstoplay = [
	    '18 Carat Affair - Modus Operandi',
	    'A Hat in Time - Peace and Tranquility',
	    'A Z U R E - The Future Is Now',
	    'Anri - Remember Summer Days',
	    'bbrainz - cyber imagination',
	    'Black Heron – Surgeon Stimulator (Heart Transplant)',
	    'Corp - Just in Time',
	    'hello meteor - Breeze Bay',
	    'HOME - Resonance',
	    'Jasper De Ceuster - Dusk',
	    'Junko Ohashi - Telephone Number',
	    'Surfing - Hit The Spot',
	    'THOUGHTS - MIDNIGHT',
	    'Zane Alexander - V o i d',
	    'マクロスMACROSS 82-99 - 葛城 ミサトYEBISU (YUNG BAE EDIT)'
    ];

    var god = Math.floor(Math.random() * 100) + 1;
    console.log(god);


    if (god == 69){
        document.getElementById('randomtext').innerHTML = "This is it. The leaked copy of Despacito 2. Treasure this moment."
    
        document.getElementById('iframeAudio').src = "assets/songs/ＤＥＳＰＬＡＳＴＩＣＯ    ３０００.mp3";
        document.getElementById('SongName').innerHTML = "Song: ＤＥＳＰＬＡＳＴＩＣＯ    ３０００";
    }else{
        var randomMessage = Math.floor(Math.random() * thingstosay.length);
        var randomSong = Math.floor(Math.random() * songstoplay.length);
    }
    document.getElementById('iframeAudio').src = "assets/songs/" + songstoplay[randomSong] + ".mp3";
    document.getElementById('SongName').innerHTML = "Song: " + songstoplay[randomSong];
    
    document.getElementById('randomtext').innerHTML = thingstosay[randomMessage];
}



