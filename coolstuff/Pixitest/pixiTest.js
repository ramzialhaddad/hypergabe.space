var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
    .add("jevil", "../../assets/images/jevilSS.png")
    .load(setup);

var jevil;

function setup(){
    var rect = new PIXI.Rectangle(0,0,192,240)
    var texture = PIXI.loader.resources["jevil"].texture;
    texture.frame = rect;

    jevil = new PIXI.Sprite(texture);

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
}, 80);

    jevil.scale.set(1.5,1.5);
    jevil.x = renderer.width / 2;
    jevil.y = renderer.height / 2;
    jevil.anchor.set(0.5, 0.5);
    stage.addChild(jevil)

    animationLoop();
}

function animationLoop(){
    requestAnimationFrame(animationLoop);

    renderer.render(stage);
}


