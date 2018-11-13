var renderer = PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
    .add("jevil", "../../assets/images/Jevil_battle_jumping.gif")
    .load(setup);

var jevil;

function setup(){
    jevil = new PIXI.Sprite(
        PIXI.loader.resources["jevil"].texture
    );

    stage.addChild(jevil);

    animationLoop();
}

function animationLoop(){
    requestAnimationFrame(animationLoop);

    jevil.scale.set(1.5, 1.5);
    jevil.x = renderer.width / 2;
    jevil.y = renderer.height / 2;
    jevil.anchor.set(0.5, 0.5);

    jevil.roation += 0.001

    renderer.render(stage);
}


