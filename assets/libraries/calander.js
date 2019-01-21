// randomizer owo
function randomizer(array){
	return Math.floor(Math.random() * array);
}


	
// h-hewwo there 'w'
var d = new Date();
var month = d.getMonth();
var day =  d.getDate();
var musicselect = null;

// page data
var pageDefault = pageData.Default;
var pageChristmas = pageData.Christmas;
var pageBirthday = pageData.Birthday;

// 
if(month == 4 & day == 20){
    console.log("Happy Birthday!!!")
	musicselect = "birthday/"
	todaypage = pageBirthday;	
}else if (month == 11 & day < 27){
	console.log("Merry Christmas!!!")
	musicselect = "christmas/"
	todaypage = pageChristmas;	
} else {
	musicselect = "default/"
	todaypage = pageDefault;
}


document.getElementById("gabechan").src=todaypage.Gabe;


var randomSong = randomizer(todaypage.Songs.length);
document.getElementById('iframeAudio').src = "assets/songs/" + musicselect + todaypage.Songs[randomSong] + ".mp3";
document.getElementById('SongName').innerHTML = "Song: " + todaypage.Songs[randomSong];
	
var randomMessage = randomizer(todaypage.Messages.length);
document.getElementById('randomtext').innerHTML = todaypage.Messages[randomMessage];


/*
if (month == 11 & day < 27){
    console.log("Merry Christmas!!!")
	console.log(month)
	console.log(day)

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
    
}
*/

