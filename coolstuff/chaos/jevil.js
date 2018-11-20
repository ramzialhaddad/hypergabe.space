var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();
var bool = false;
var cd = false;
var sound = new Audio('worldisrevolving.mp3');

PIXI.loader
    .add("jevil", "../../assets/images/jevilSS.png")
    .load(setup);

var jevil;

function setup(){
    stage.interactive = true;
    var rect = new PIXI.Rectangle(0,0,192,240)
    var texture = PIXI.loader.resources["jevil"].texture;
    texture.frame = rect;

    sound.loop = true;

    jevil = new PIXI.Sprite(texture);

    function startLoop(){
        var jump = setInterval(function() {
            rect.x += 192;
            if (rect.x >= 192 * 5){
                rect.x = 0;
                rect.y += 240;
                if(rect.y >= 240 * 8){
                    rect.y = 0;
                }
            }
            jevil.texture.frame = rect;
        }, 40);
    }

    jevil.interactive = true;
    jevil.scale.set(2,2);
    jevil.x = renderer.width / 2;
    jevil.y = renderer.height / 2;
    jevil.anchor.set(0.5, 0.5);    

    stage.addChild(jevil)
    animationLoop();

    jevil.on('pointerdown', function() {
        if (!bool){
            bool = true;
            sound.play();
            startLoop();
        }else{
            if (!cd){
                cd = true;
                console.log("CHAOS CHAOS!")
                randomVoice();
                setTimeout(function(){
                    cd = false;
                }, 1000)
            }
        }
    });
    
}

function animationLoop(){
    requestAnimationFrame(animationLoop);

    renderer.render(stage);
}

function randomVoice(){
    var x = Math.floor((Math.random() * 6) + 1);
    var voice = new Audio() 
    voice.src = "sounds/data" + x + ".wav";
    voice.play();
}

