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
    if (rect.x >= 192 * 4){
        rect.x = 0;
        if(rect.y >= 240 * 7){
            rect.y = 0;
        }
        rect.y += 240;
    }
    jevil.texture.frame = rect;
}, 40);

    jevil.scale.set(2,2);
    stage.addChild(jevil)

    animationLoop();
}

function animationLoop(){
    requestAnimationFrame(animationLoop);

    renderer.render(stage);
}


