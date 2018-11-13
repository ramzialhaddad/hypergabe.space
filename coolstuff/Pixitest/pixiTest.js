var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
    .add("../../assets/images/Jevil_battle_jumping.gif")
    .load(setup);

var jevil;

function setup(){
    jevil = new PIXI.Sprite(
        PIXI.loader.resources["../../assets/images/Jevil_battle_jumping.gif"].texture
    );
    stage.addChild(jevil);
    renderer.render(stage);
}


